import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FaRegUser } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import * as S from './style';

const CardCarrinho = ({ cartSize }) => (
  <S.Container>
    <S.MinhaConta>
      <FaRegUser size={18} />
      <span>Minha Conta</span>
    </S.MinhaConta>
    <Link to="/cart">
      <S.CarrinhoCompra>
        <TiShoppingCart size={23} />
        <S.CountCompra>{cartSize}</S.CountCompra>
      </S.CarrinhoCompra>
    </Link>
  </S.Container>
);

export default connect((state) => ({ cartSize: state.cart.length }))(CardCarrinho);
