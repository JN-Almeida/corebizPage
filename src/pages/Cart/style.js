import styled from 'styled-components';
import { BtnBlack } from '../../styles/btnsStyles';

import BannerTopo from '../../assets/Banner-topo.jpg';
import BannerMobile from '../../assets/Banner-mobile.jpg';

export const ImgTopo = styled.section`
    width: 100%;
    padding-bottom: 25%;
    background-image: url(${BannerTopo});
    background-size: cover;
    background-position: center;
    @media(max-width: 700px){
        background-image: url(${BannerMobile});
        padding-bottom: 60%;
    }
`;

export const Cart = styled.section`
    max-width: 1300px;
    padding: 30px 30px;
    margin: 0 auto;  
    width: 100%;
    hr{
        width: 65px;
        border: 3px solid #C0C0C0;
        margin: 0;
        margin-bottom: 20px;
    }
`;

export const MessageError = styled.h3`
    
`;

export const ListProduto = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    margin-bottom: 60px;
    @media(max-width: 890px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
    }

    @media(max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ButtonFinalizar = styled(BtnBlack)`
    margin-top: 60px;
    cursor: pointer;
`;
