import styled from 'styled-components';

export const ListContainer = styled.section`
    max-width: 1300px;
    padding: 30px 30px;
    margin: 0 auto;    

    hr{
        width: 65px;
        border: 3px solid #C0C0C0;
        margin: 0;
        margin-bottom: 20px;
    }
`;

export const List = styled.section`
    display: flex;
    justify-content: space-between;
      
    @media(max-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }
`;
