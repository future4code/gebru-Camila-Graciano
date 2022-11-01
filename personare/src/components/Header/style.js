import styled from "styled-components";
import fundo from "../../assets/fundo.jpg";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2%;
  background-image: url(${fundo});

  h1 {
    margin-bottom: 30px;
    font-family: "Helvetica Neue", Helvetica;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0.4);
  }
`;
