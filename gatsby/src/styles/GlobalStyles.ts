import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  button {
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* .gatsby-image-wrapper { 
    img[src*=base64\\,] {
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
  }
} */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar-track {
  }

  body::-webkit-scrollbar-thumb {
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;