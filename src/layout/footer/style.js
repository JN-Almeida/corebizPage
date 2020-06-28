import styled from 'styled-components';

import { BtnWhite } from '../../styles/btnsStyles';

export const Footer = styled.footer`
    background-color: #000000;
    color: #ffffff;
`;

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 30px 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Location = styled.div`
    h3{
        font-size: 20px;
    }
    hr{
        width: 44px;
        border: 2.5px solid #ffffff;
        margin: 20px 0
    }
    p{
        margin-top: 10px;
        font-size: 13px;
    }
`;

export const Contact = styled.div`

`;

export const Button = styled(BtnWhite)`
    width: 195px;
    height: 38px;
    display: grid;
    grid-template-columns: .2fr 1fr;
    align-items: center;
    align-content: center;
    text-align: -webkit-right;
    margin-bottom: 30px;
    svg{
        margin-right: 5px;
    }
    span{
        text-align: center;
        font-weight: 600;
        font-size: 12px;

    }
`;

export const Sign = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

export const Logo = styled.a`
    p{
        font-size: 10px;
        font-weight: normal;
    }
    svg{
        height: 18px;
        path{
            fill: #ffffff;
        }
    }
    
`;
