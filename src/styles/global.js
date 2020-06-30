import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  global.SC_DISABLE_SPEEDY = true
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    font-family: 'Nunito', sans-serif;
    letter-spacing: -.5px;

    > div{

      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  input{
    padding: 5px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    backface-visibility: hidden;
    outline: none;
    overflow: visible;
    letter-spacing: 1px;
  }

  button{
    border: none;
    cursor: pointer;
    font: inherit;
    &:active{

    }
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ol, ul {
    list-style: none;
  }

`;

export default GlobalStyles;
