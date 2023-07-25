import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
    *{ 
      margin: 0;
      padding: 0;
      scroll-behavior: auto;
      max-width: 100%;
     
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   html {
      scroll-behavior: smooth;
}
   body{
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        flex-direction: column;
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.colors.base};
        font-family: ${({ theme }) => theme.fontFamily.roboto};
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;

   }
   input, button, h1, p, span, textarea {
      border: 0;
      box-shadow: none;
   }
`
