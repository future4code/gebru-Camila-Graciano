import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"


const ContainerCard = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95%;
  box-shadow: grey 1px 1px 5px;
  width: 90%;
  margin-bottom: 10px;
`;
const ProfilePhoto = styled.img`
  width: 40vh;
  height: 45vh;
  box-shadow: grey 1px 1px 5px;
  margin-bottom: 0;
`;
const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 110px;
  font-size: 15px;
  width: 35vh;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vh;
  margin-top: 0;
  height: 35px;
`;

const ButtonX = styled.button`
  color: red;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 20px;
  outline-style: none;
  margin-top: 0;
`;

const ButtonHeart = styled.button`
  color: blue;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 30px;
  outline-style: none;
  margin-top: 0;
`;

const ResetButton = styled.button`
  height: 25px;
  margin-right: 10px;
  padding: 4px 10px;
  font-size: 10px;
  color: white;
  background-color: #FF0000;
`;

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [userChoice, setUserChoice] = useState(null);

  //mostrar os perfis que podem dar matches
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //se eu der like tem que ver se o usuario tb deu like:
  const choosePerson = (value) => {
    const body = {
      id: profile.id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Deu Match!!!!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   //resetar todos os perfis
  const resetAllProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila/clear"
      )
      .then((response) => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerCard>
      <div>
        <ResetButton type="button" onClick={resetAllProfiles}>REFRESH</ResetButton>
      </div>
      <ProfilePhoto src={profile.photo} />

      <InfoProfile>
        <h4>
          {profile.name} , {profile.age}
          <h6>{profile.bio}</h6>
        </h4>
      </InfoProfile>
      <Buttons>
        <ButtonX onClick={() => choosePerson(false)}>X</ButtonX>

        <ButtonHeart onClick={() => choosePerson(true)}>♥</ButtonHeart>
      </Buttons>
    </ContainerCard>
  );
}