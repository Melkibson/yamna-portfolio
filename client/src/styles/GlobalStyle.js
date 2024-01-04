import {createGlobalStyle} from "styled-components";
import {colors} from "../styles/CommonStyle";

export const Global = createGlobalStyle`
    @font-face {
      font-family: Abril;
      src:url("/fonts/abril/AbrilFatface-Regular.woff2");
    }
    
    @font-face {
      font-family: AkkuratRg;
      src:url("/fonts/akkurat/Akkurat.ttf");
    }
    
    @font-face {
      font-family: HaasMd;
      src:url("/fonts/haas/NHaasGroteskTXPro-65Md.woff2");
    }
    
    @font-face {
      font-family: AkkuratBd;
      src:url("/fonts/akkurat/Akkurat-Bold.ttf");
    }
    @font-face {
      font-family: AkkuratLgt;
      src:url("/fonts/akkurat/Akkurat-Light.ttf");
    }
    @font-face {
        font-family: CameraObscura;
        src:url("/fonts/cameraobscura/cameraobscura.ttf");
    }
    @font-face {
        font-family: Neon;
        src:url("/fonts/neon/neon.ttf");
    }
    body, html, *
    
    {
      padding: 0px;
      margin: 0px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body, html {
      position: relative;
      width: 100%;
      height: auto;
      overflow-x: hidden;
      scroll-behavior: smooth;
      background: ${colors.darkGrey};
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    body::-webkit-scrollbar, main::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    div, span {
      line-height: 120%;
      color: ${colors.white};
    }
      
    }
    #root {
    width: 100%;
    }
    iframe {
      border: 0;
    }
    h1, h2, h3, h4, h5, h6, i
    {
      font-weight: normal;
      font-style: normal;
      line-height: 125%;
          }
    a {
      color: inherit;
      text-decoration: none;
    }
    body.block
    {
      overflow:hidden;
    }

    body::-webkit-scrollbar {
      display: none;
    }
    img {
        vertical-align: middle;
        border: 0;
    }
    
    @keyframes gradient {
        0%{background-position: 0 50%}
        50%{background-position:100% 50%}
        100%{background-position:0 50%}
    }

    `
const GlobalStyle = () => {
    return(
        <Global/>
    )
}

export default GlobalStyle
