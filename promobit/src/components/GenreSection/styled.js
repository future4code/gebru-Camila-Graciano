import styled from "styled-components";

export const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d0c5e;
  color: #ffffff;
  min-height: 280px;
  padding-top: 40px;
  width: 100%;
`;

export const Description = styled.div`
  h2 {
    width: 781px;
    height: 112px;
    left: 328px;
    top: 141px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #ffffff;
  }

  p {
    text-align: center;
    margin-top: 30px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1.1px;
  }
  @media screen and (max-width: 1040px) {
    h3 {
      font-size: 37px;
      text-align: center;
    }
  }
`;

export const Buttons = styled.div`
  max-width: 1040px;
  margin: 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .remove {
    cursor: pointer;
    background-color: #ffff;
    border: none;
    border-radius: 4px;
    font-weight: bolder;
    font-size: 16px;
    margin: 4px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 700;
    border: none;
  }
  .add {
    cursor: pointer;
    background-color: #5c16c5;
    color: #ffff;
    border: none;
    border-radius: 4px;
    font-weight: bolder;
    font-size: 16px;
    margin: 4px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 700;
  }
`;
