import styled from 'styled-components';

import BannerTopo from '../../assets/Banner-topo.jpg';
import BannerMobile from '../../assets/Banner-mobile.jpg';

export const Home = styled.div`
`;

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
