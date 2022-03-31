import React from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage () {
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
<div>
    <h2> Eu sou a Home Page </h2>
    <button onClick={goToListTripPage}>Ver viagens</button>
    <button onClick={goToLoginPage}>Área de Admin</button>
</div>

    )
}
