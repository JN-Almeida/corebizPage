import React from 'react';

import NewsLatter from '../../components/NewsLatter';
import ListMaisVendidos from './listMaisVendidos';
import * as S from './style';

const Home = () => (
  <S.Home>
    <S.ImgTopo />
    <ListMaisVendidos />
    <NewsLatter />
  </S.Home>
);

export default Home;
