import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/eldergods-bb.regular.ttf';
import fontItalic from '../assets/fonts/eldergods-bb.italic.ttf';

const Typography = createGlobalStyle`

// ElderGods font family
  @font-face {
    font-family: ElderGods;
    src: url(${font});
    font-style: normal;
  }

  @font-face {
    font-family: ElderGods;
    src: url(${fontItalic});
    font-style: italic;
  }

  html {
    font-family: 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: black;
    text-decoration-color: red;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
`;

export default Typography;