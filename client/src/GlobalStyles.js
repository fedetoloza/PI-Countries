import { createGlobalStyle } from "styled-components";
import background from "./statics/mundo.jpg";

export const GlobalStyles = createGlobalStyle`

:root{
    --main-color : #201973;
    --background-color: #2b2c34; 
    --text-color: #fffffe;
    --primary : #ff8906;
    --secondary : #fc633d;
    --headline : #094067;
    --highligth : #3da9fc;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: 'Roboto', 'Oxygen','Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
}
`;
