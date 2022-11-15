import styled from "styled-components";

export const CastContainer = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 60px 0 10px 51px;
    color: white;
    svg {
      color: red;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      margin: 25px 0 20px 10px;
      color: white;
    }
  }
`;
export const TrailerContainer = styled.div`
  justify-content: center;
  margin-left: 51px;
  align-items: center;
  h1 {
    margin: 25px 0 15px;
    font-size: 28px;
    font-weight: 700;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
  h1 {
    margin: 25px 0 10px 0;
  }
  @media screen and (max-width: 380px) {
    display: none;
  }
`;
export const Trailer = styled.div`
  iframe {
    width: 907px;
    height: 510px;
  }
  @media screen and (max-width: 1024px) {
    margin: 10px;
    iframe {
      width: 450px;
      height: 300px;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 10px;
    iframe {
      width: 350px;
      height: 200px;
    }
  }
`;
export const CastCards = styled.div`
  display: flex;
  height: 450px;
  width: 96%;
  margin: auto;
  color: white;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0.75rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 0.1875rem;
  }
`;
export const Cast = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 380px;
  width: 100%
  box-shadow: 0.1rem 0.1rem 0.001rem 0.13rem rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 15px;
  color: white;
  img {
    width: 175px;
    border-radius: 5px;
    margin: 15px 5px;
  }
  h2 {
    width: 175px;
    font-size: 20px;
    text-align: center;
    height: 295px;
    color: white;
  }
  svg {
    height: 175px;
    font-size: 120px;
    text-align: center;
    color: white;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: white;
  }
`;
