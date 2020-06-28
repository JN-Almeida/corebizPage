import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const ListItem = ({
  name, image, listPrice, price, installmentsQuantity, installmentsValue, button,
}) => (
  <S.Item>
    <S.Image src={image} />
    <S.Content>
      <S.Infos>

        <S.NameProduct>{name}</S.NameProduct>
        <S.PastPrice disabled={listPrice ? '' : 'none'}>
          de
          {' '}
          {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(listPrice / 100)}
        </S.PastPrice>
      </S.Infos>
      <S.Price>
        por
        {' '}
        {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)}
      </S.Price>
      <S.Installments disabled={installmentsQuantity.length > 0 ? '' : 'none'}>
        ou
        {' '}
        {installmentsQuantity}
        {' '}
        de
        {' '}
        {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(installmentsValue / 100)}
      </S.Installments>
    </S.Content>

    <S.ButtonComprar onClick={button}>Comprar</S.ButtonComprar>
  </S.Item>
);

ListItem.defaultProps = {
  listPrice: ' ',
  installmentsQuantity: ' ',
  installmentsValue: ' ',
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  listPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
  installmentsQuantity: PropTypes.array,
  installmentsValue: PropTypes.array,
};

export default ListItem;
