import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ListTripsPage () {
    const navigate = useNavigate()
    

    const goToHomePage = () => {
        navigate("/")
      }
      const goToAplicationForm = () => {
        navigate("/trips/aplication")
      }
      
    return (
<div>
    <h2> Eu sou a ListTripsPage </h2>
    <button onClick={goToHomePage}>Voltar</button>
    <button onClick={goToAplicationForm}>Inscrever-se</button>
</div>

    )
}