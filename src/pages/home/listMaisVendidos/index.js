import React, { Component } from 'react';

import ListItem from '../../../components/listItem';

import * as S from './style';

import api from '../../../services/api';

class listMaisVendidos extends Component {
  state= {
      products: [],
      idProductsCompra: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ products: response.data})
    
    const idProductsCompra = localStorage.getItem('idProductsCompra')
    if (idProductsCompra) {
      this.setState({ idProductsCompra: JSON.parse(idProductsCompra)})
    }
    
  }

  componentDidUpdate(_, prevState ){
    if (prevState.idProductsCompra !== this.state.idProductsCompra) {
      localStorage.setItem('idProductsCompra', JSON.stringify(this.state.idProductsCompra))
    }
  }
  
  handleCompraItem = e => {
    this.setState({ idProductsCompra: [ ...this.state.idProductsCompra, e.productId ] })
    //CardCarrinho.constructor('teste')
  }

  render() {
    const { products } = this.state;
    
    return (
      <S.ListContainer>
        <h3>Mais Vendidos</h3>
        <S.List>

            {products.map(product => {
                return(
                    <ListItem
                    key={product.productId}
                    name={product.productName}
                    image={product.imageUrl}
                    starts ={product.stars}
                    listPrice={product.listPrice}
                    price={product.price}
                    installmentsQuantity={product.installments.map(item => (item.quantity ))}
                    installmentsValue={product.installments.map(item => (item.value ))}
                    button={() => this.handleCompraItem(product)}
                    />
                    )
            })}
        </S.List>
      </S.ListContainer>
    );
  }
}

export default listMaisVendidos;
