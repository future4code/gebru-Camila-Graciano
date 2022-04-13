import { createGlobalStyle } from "styled-components";
import Sky from "./assets/sky.jpg"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
      background-image: url(${Sky});
    }
`