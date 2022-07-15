import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');

  @font-face {
    font-family: Prospectus;
    src: url("assets/fonts/Prospectus/Prospectus-SemiBold.otf")
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-smooth: always;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  :root {
    --black: rgb(2,2,2);
    --gray: rgb(22,24,25);
    --blue: rgb(24,38,59);
    --blue-on-light: rgb(41, 63, 96);
    --green: rgb(39,72,62);
    --bege: rgb(182, 129, 89);
    --text: white;
  }

  body,
  #root {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  html, body, #root {
    background-color: var(--gray);
  }

  h1, h2, p, span, li {
    color: var(--text);
    list-style: none;
  }

  h1 {
    position: relative;
    font-weight: 100;
    font-family: Prospectus;
    font-size: 50px;
  }
  h2 {
    font-weight: 100;
    font-size: 30px;
    font-family: Prospectus;
  }
  p {
    font-family: "Inter", sans-serif;
    text-align: justify;
    font-size: 14px;
  }
`
