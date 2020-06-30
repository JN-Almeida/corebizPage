import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListItem from '../../../components/listItem';

import * as S from './style';

import api from '../../../services/api';

class listMaisVendidos extends Component {
  state= {
      products: [],
      productsCompra: [],
  }
  
  async componentDidMount() {
    const response = await api.get('');
    
    this.setState({ products: response.data})
    
    const productsCompra = localStorage.getItem('productsCompra')
    if (productsCompra) {
      this.setState({ productsCompra: JSON.parse(productsCompra)})

    }
    
  }
  
  componentDidUpdate(_, prevState ){
    if (prevState.productsCompra !== this.state.productsCompra) {

      localStorage.setItem('productsCompra', JSON.stringify(this.state.productsCompra))
    }
  }
  
  handleCompraItem = product => {
    this.setState({ productsCompra: [ ...this.state.productsCompra, product ] })
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_CART',
      product,
    })
    //CardCarrinho.constructor('teste')
  }

  render() {
    const { products } = this.state;
    
    return (
      <S.ListContainer>
        <h3>Mais Vendidos</h3>
        <hr />
        
        <S.List>

            {products.map(product => {
                return(
                    <ListItem
                    key={product.productId}
                    name={product.productName}
                    image={product.imageUrl}
                    stars ={product.stars}
                    listPrice={product.listPrice}
                    price={product.price}
                    installmentsQuantity={product.installments.map(item => (item.quantity ))}
                    installmentsValue={product.installments.map(item => (item.value ))}
                    button={() => this.handleCompraItem(product)}
                    valueButton="Comprar"
                    />
                    )
            })}
        </S.List>
      </S.ListContainer>
    );
  }
}

export default connect()(listMaisVendidos);
