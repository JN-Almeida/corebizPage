import React from 'react';
import PropTypes from 'prop-types';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import OffSvg from '../../assets/off.svg';

import * as S from './style';

const ListItem = ({
  name, image, listPrice, price, installmentsQuantity, installmentsValue, button, stars, valueButton,
}) => {
  const starsNumber = [];
  for (let i = 0; i < 5; i++) {
    starsNumber.push(i);
  }
  function renderStars(e) {
    if (e < stars) {
      return <AiFillStar key={e} size={10} />;
    }

    return <AiOutlineStar key={e} size={10} />;
  }
  return (
    <S.Item>
      <S.Image src={image} />
      <S.Off src={OffSvg} disabled={listPrice ? '' : 'none'} />
      <S.Content>
        <S.Infos>

          <S.NameProduct>{name}</S.NameProduct>
          <div>
            {starsNumber.map((e) => renderStars(e))}
          </div>
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

      <S.ButtonComprar onClick={button}>{valueButton}</S.ButtonComprar>
    </S.Item>
  );
};

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
