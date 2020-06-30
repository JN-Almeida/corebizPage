import React from 'react';

import { MdHeadsetMic as HeadSetIcon } from 'react-icons/md';
import { IoMdMail as MailIcon } from 'react-icons/io';
import * as S from './style';

import { ReactComponent as LogoCorebiz } from '../../assets/logo.svg';
import { ReactComponent as LogoVtex } from '../../assets/vtex.svg';

const footer = () => (
  <S.Footer>
    <S.Wrapper>

      <S.Location>
        <h3>Localização</h3>
        <hr />
        <p>
          Rua Ifigênia Maria de Oliveira 3793
        </p>
        <p>
          Jd. Piratininga - 14403-583
        </p>
        <p>
          Franca SP, Brasil
        </p>
        <p>
          contato@clickqi.com.br
        </p>
        <p>
          +55 16 3713-6985
        </p>
      </S.Location>

      <S.Contact>
        <S.Button href="/">
          <MailIcon size={17} />
          <span>
            ENTRE EM CONTATO
          </span>
        </S.Button>
        <S.Button href="/">
          <HeadSetIcon size={17} />
          <span>
            FALE COM O NOSSO CONSULTOR ONLINE
          </span>
        </S.Button>
      </S.Contact>

      <S.Sign>
        <a href="/" targe="_blank">
          <p>Created by</p>
          <LogoCorebiz />
        </a>
        <a href="/" targe="_blank">
          <p>Powered by</p>
          <LogoVtex />
        </a>
      </S.Sign>

    </S.Wrapper>
  </S.Footer>
);

export default footer;
