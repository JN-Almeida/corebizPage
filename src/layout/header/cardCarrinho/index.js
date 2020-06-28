import React, { Component } from 'react';

import { FaRegUser } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import * as S from './style';

class CardCarrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantCompra: 0,
    };
  }

  componentDidMount() {
    const quant = localStorage.getItem('idProductsCompra');
    if (quant) {
      this.setState({ quantCompra: JSON.parse(quant).length });
    }
  }

  render() {
    const { quantCompra } = this.state;

    return (
      <S.Container>
        <S.MinhaConta>
          <FaRegUser size={18} />
          <span>Minha Conta</span>
        </S.MinhaConta>
        <S.CarrinhoCompra>
          <TiShoppingCart size={23} />
          <S.CountCompra>{quantCompra}</S.CountCompra>
        </S.CarrinhoCompra>
      </S.Container>
    );
  }
}

export default CardCarrinho;
