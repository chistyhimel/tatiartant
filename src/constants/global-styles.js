import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*::before,
*::after,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  *:focus {
    outline: none;
}


  body {
    overflow-x: hidden;
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    background: ${({ theme }) => theme.colors.secondary};
    
    h1{
      font-family: 'Vidaloka', serif;
    }
    p, h5,h6,small,button,a{
      font-family: 'Lato', sans-serif;
    }
    
    .slick-prev, .slick-next{
    display: none !important;

    
  }
  }

  hr{
      background-color: #ebebeb;
      border: 0;
      height: 1px;
    }
  a{
    text-decoration: none;
  }

  
  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
