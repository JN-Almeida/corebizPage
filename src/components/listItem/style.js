import styled from 'styled-components';

import { BtnBlack } from '../../styles/btnsStyles';

export const Item = styled.div`
    background-color: #ffffff;
    text-align: center;
    transition: .3s ease-in-out;
    padding-bottom: 20px;
    &:hover{
        background-color: #E6E8EA;
        a{
            opacity: 1
        }
    }
`;

export const Image = styled.img`
    max-width: 200px;
`;

export const Content = styled.div`
    height: 110px;
`;

export const Infos = styled.div`
    height: 53px;
`;

export const NameProduct = styled.p`
    color: #7A7A7A;
    font-size: 12px;
    padding: 10px 0;
`;

export const PastPrice = styled.small`
    color: #7A7A7A;
    font-size: 12px;
    text-decoration: line-through;
    display: ${(props) => props.disabled};
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
`;
