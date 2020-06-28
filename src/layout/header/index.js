import React from 'react';

import { GrSearch } from 'react-icons/gr';
import CardCarrinho from './cardCarrinho';
import Logo from '../../assets/logo-preto.png';

import * as S from './style';

const Header = () => (
  <header>
    <S.Wrapper>
      <S.ImgLogo src={Logo} />
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
