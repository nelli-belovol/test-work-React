import { createGlobalStyle } from 'styled-components';
// import px2vw from '../utils/px2vw';

export const Global = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: inherit;
   outline: 1px solid red; 
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

p {
  margin: 0;
}

h2,
h3 {
  color: black;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

:root {
  --backrgound-color: rgb(27, 31, 42);

  --first-accentcolor: rgb(63, 67, 79);
  --second-accentcolor: rgb(214, 169, 109);

  --main-color: rgb(217, 222, 225);
  --second-color: rgb(202, 207, 210);

  --main-text-color: rgb(87, 90, 91);
  --second-text-color: rgb(219, 222, 230);

  --price-color: rgb(144, 70, 68);


  font-size: 6px;

  @media (min-width: 768px) {
    font-size: 8px;
  }

   @media (min-width: 1024px) {
    font-size: 10px;
   }

   background-color: var(--backrgound-color);
}

  
`;

export default Global;
