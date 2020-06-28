import styled from 'styled-components';

export const BtnWhite = styled.a`
    background-color: #ffffff;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
    transition: .3s ease-in-out;
    &:focus, &:hover, &:active{
        box-shadow: 0 0 0 2px #000000, 0 0 0 4px #ffffff;
    }
`;

export const BtnBlack = styled.a`
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
`;
