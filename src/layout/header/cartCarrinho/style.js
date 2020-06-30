import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const MinhaConta = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
    span{
        color: #7A7A7A;
        margin-left: 5px;
        font-size: 13px;
    }

    @media(max-width: 400px){
        display: none;
    }
`;

export const CarrinhoCompra = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CountCompra = styled.div`
    background-color: #F8475F;
    height: 14px;
    width: 14px;
    color: #fff;
    border-radius: 100%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

`;
