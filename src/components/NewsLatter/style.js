import styled from 'styled-components';

export const Container = styled.section`
    background-color: #F2F2F2;
    font-family: 'lato';
    padding: 30px;
    text-align: center;

    h2{
        font-size: 22px;
        margin-bottom: 20px;
    }
    h5{
        color: #008000;
        margin-bottom: 20px;
    }
    form{
        display: flex;
        justify-content: center;
        input{
            padding: 15px;
            width: 280px;
            margin-right: 10px;
            font-size: 12px;
            display: block
        }

        @media(max-width: 800px){
            flex-direction: column;
            align-items: center;
            input{
                margin-bottom: 30px;
            }
        }
    }

`;

export const InputContainer = styled.div`
    position: relative;

    input{
        padding: 15px;
        width: 280px;
        margin-right: 10px;
        font-size: 12px;
    }

    span{
        position: absolute;
        top: 48px;
        left: 0;
        color: #D7182A;
        font-size: 12px;
    }

`;

export const ButtonSubmit = styled.button`
    font-family: 'lato';
    font-size: 14px;
    background-color: #000000;
    color: #ffffff;
    padding: 15px;
    border-radius: 5px;
    width: 140px;
    flex: 0 1 auto;
    transition: .3s ease-in-out;
    &:focus, &:hover, &:active{
        box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000;
    }
`;
