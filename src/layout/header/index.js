import React from 'react';
import { Link } from 'react-router-dom';

import { GrSearch } from 'react-icons/gr';
import CardCarrinho from './cartCarrinho';
import Logo from '../../assets/logo-preto.png';

import * as S from './style';

const Header = () => (
  <header>
    <S.Wrapper>
      <Link to="/">
        <S.ImgLogo src={Logo} />
      </Link>
      <S.PesquisaContainer>
        <S.FormPesquisa>
          <input type="text" placeholder="O que está procurando?" />
          <button type="button">
            <GrSearch size={18} />
          </button>
        </S.FormPesquisa>
      </S.PesquisaContainer>
      <CardCarrinho />
    </S.Wrapper>
  </header>
);

export default Header;
