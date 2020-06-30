import styled from 'styled-components';

import { BtnBlack } from '../../styles/btnsStyles';

export const Item = styled.div`
    background-color: #ffffff;
    text-align: center;
    transition: .3s ease-in-out;
    padding-bottom: 20px;
    position: relative;
    &:hover{
        background-color: #E6E8EA;
        a{
            opacity: 1
        }
    }
`;

export const Image = styled.img`
    max-width: 250px;
    @media(max-width: 700px){
        max-width: initial;
    }
`;

export const Off = styled.img`
    position: absolute;
    top: 0;
    right: 0; 
    width: 70px;
    height: 70px;
    display: ${(props) => props.disabled};

    @media(max-width: 600px){
        width: 50px;
        height: 50px;
    }
`;

export const Content = styled.div`
    height: 120px;

    @media(max-width: 680px){
        height: 130px;
    }
`;

export const Infos = styled.div`
    height: 67px;
    svg{
        fill: red;
    }
    @media(max-width: 680px){
        height: 72px;
    }
`;

export const NameProduct = styled.p`
    color: #7A7A7A;
    font-size: 12px;
    padding: 10px 0 0 0;

    @media(max-width: 680px){
        font-size: 10px;
    }
`;

export const PastPrice = styled.small`
    color: #7A7A7A;
    font-size: 12px;
    text-decoration: line-through;
    display: ${(props) => props.disabled};
    
    @media(max-width: 680px){
        font-size: 10px;
    }
`;

export const Price = styled.p`
    font-size: 18px;
    color: #000000;
    font-weight: 800;
    font-style: normal;
`;

export const Installments = styled.p`
    display: ${(props) => props.disabled};
    color: #7A7A7A;
    font-size: 11px;
`;

export const ButtonComprar = styled(BtnBlack)`
    cursor: pointer;
    opacity: 0;
    transition: .3s ease-in-out;
    @media(max-width: 700px){
        opacity: 1;
    }
`;
