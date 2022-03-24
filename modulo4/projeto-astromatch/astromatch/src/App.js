import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import Matches from './components/Matches'
import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const MatchButton = styled.button`
  border-radius: 8px;
  color: #16bf00;
  height: 60%;
  margin-right: 10px;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 12px;
  outline-style: none;
`;

const ContainerMatchCandidates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vh;
  height: 85vh;
  flex-direction: column;
  box-shadow: grey 1px 1px 5px;
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState("App");
  const [profiles, setProfiles] = useState({});

  const changePage = () => {
    if (currentPage === "App") {
      setCurrentPage("matchList");
    } else {
      setCurrentPage("App");
    }
  };

  return (
    <ContainerGeral>
      <Header>
        <MatchButton onClick={changePage}>Matches</MatchButton>
      </Header>

      {currentPage === "App" ? (
        <ContainerMatchCandidates>
          <Profile></Profile>
        </ContainerMatchCandidates>
      ) : (
        <Matches />
      )}
    </ContainerGeral>
  );
}
