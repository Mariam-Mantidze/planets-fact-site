import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   

    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: rgba(7, 7, 36, 1);
       min-height: 100dvh;
       background-image: url("./assets/background-stars.svg");
       background-repeat: no-repeat;
       background-size: cover;
       /* background-position: center; */

    }

    h1, h2 {
        font-family: "Antonio", sans-serif;
        /* font-family: "League Spartan", sans-serif; */

    }
`;
