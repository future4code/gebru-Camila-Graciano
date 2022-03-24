import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";

const ContainerMatchList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: grey 1px 1px 5px;
  width: 45vh;
  height: 80vh;
  /* background-color: pink; */
  flex-wrap: wrap;
`;

 const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* background-color: yellow; */
  justify-content: space-around;
  margin: 3px;
  align-items: center;
`;

const MatchCard = styled.div`
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 80px;
  flex-wrap: wrap;
`;

const PhotoExemple = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

 const MatchName = styled.h6`
  font-size: 10px;
  margin: 0;
  padding: 0;
`;

export default function Matches() {
  const [matches, setMatches] = useState([]);

  //mostrar a lista de matches
  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tatiana/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getMatch = matches.map((match) => {
    return (
      <ContainerList>
        <MatchCard>
          <PhotoExemple src={match.photo} />
          <MatchName>{match.name}</MatchName>
        </MatchCard>
      </ContainerList>
    );
  });
  return <ContainerMatchList>{getMatch}</ContainerMatchList>;
}