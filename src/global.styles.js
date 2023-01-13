import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
   box-sizing: border-box;
   margin : 0;
   padding : 0;
 }
 
    html,body{
    max-height: 100%;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-size: 16px;
   color : white;
    }
`;

