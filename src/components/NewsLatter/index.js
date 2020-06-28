import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import apiNews from '../../services/apiNews';

import * as S from './style';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Preencha com seu nome completo'),
  email: Yup.string()
    .email('Preencha com um e-mail válido')
    .required('E-mail é obrigatório'),
});

const NewsLatter = () => {
  async function handleSubmit(data) {
    const response = await apiNews.post('', data);

    console.log(response.data.message);
  }

  return (
    <S.Container>

      <h2>Participe de nossas news com promoções e novidades!</h2>

      <Form schema={schema} onSubmit={handleSubmit}>

        <S.InputContainer>
          <Input name="name" type="text" placeholder="Digíte seu nome" />
        </S.InputContainer>
        <S.InputContainer>
          <Input name="email" type="text" placeholder="Digíte seu email" />
        </S.InputContainer>

        <S.ButtonSubmit type="submit">Eu quero!</S.ButtonSubmit>

      </Form>
    </S.Container>
  );
};

export default NewsLatter;
