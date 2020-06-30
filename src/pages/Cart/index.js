import React, { Component } from 'react';
import { connect } from 'react-redux'

import ListItem from '../../components/listItem';

import * as S from './style';

class Cart extends Component {
  state= {
    ProdutsCart : JSON.parse(localStorage.getItem('productsCompra')),
  }
    
  componentDidUpdate(_, prevState ){
    if (prevState.ProdutsCart !== this.state.ProdutsCart) {

      localStorage.setItem('productsCompra', JSON.stringify(this.state.ProdutsCart))
    }
  }

  handleDeleteItem(idProduct){
    this.setState({ ProdutsCart: this.state.ProdutsCart.filter(product => product.productId !== idProduct) })
    const { dispatch } = this.props;
    dispatch({
      type: 'REMOVE_CART',
      idProduct,
    })
  }
  

  render() {
    const { ProdutsCart } = this.state;

    console.log(ProdutsCart.length)
    if(ProdutsCart.length < 1){
      return (
        <>
          <S.ImgTopo />

          <S.Cart>
            <h3>Itens Adicionados ao Carrinho</h3>
            <hr />
            <S.MessageError>No momento você não tem nada no carrinho!</S.MessageError>
            <S.MessageError>Volte para Home e Adicione alguns itens...</S.MessageError>
          </S.Cart>
        </>
      )
    }

    
    return (
      <>
        <S.ImgTopo />

        <S.Cart>
          <h3>Itens Adicionados ao Carrinho</h3>
          <hr />
          <S.ListProduto>
            {ProdutsCart.map(product => {
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
              button={() => this.handleDeleteItem(product.productId)}
              valueButton="Deletar"
              />
              )
            })}
          </S.ListProduto>
          <S.ButtonFinalizar>Finalizar Pedido</S.ButtonFinalizar>
        </S.Cart>
      </>
    );
        
  }
}

export default connect()(Cart);
