import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHome, DivButton } from "./style";
import Labex from "../../assets/LabeX1.png"

function HomePage() {
    const navigate = useNavigate()

    const goToListTripPage = () =>{
        navigate("/trips/list")
    }
    const goToLoginPage = () =>{
        const token = localStorage.getItem("token")
        if(token){
          navigate(`/admin/trips/list`)
        }else{
          navigate("/login")
        }
    }

  return (
    <ContainerHome>
          <DivButton>
          <div>
          <img src={Labex} alt = ""/>
          </div>
        <button onClick={goToListTripPage}>Ver viagens</button>
        <button onClick={goToLoginPage}>Área de Admin</button>
        </DivButton>
    </ContainerHome>
  );
}

export default HomePage