import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 15px 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const ImgLogo = styled.img`
    width: 170px;
`;

export const PesquisaContainer = styled.div`

`;

export const FormPesquisa = styled.form`
    border-bottom: 1px solid #7A7A7A;
    input{
        width: 718px;
        border: none;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;

    }
`;
