import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage () {
    const navigate = useNavigate()
    
    const goToListTripsPage = () => {
        navigate("/trips/list")
      }
    
    
    return (
<div>
    <h2> Eu sou a ApplicationFormPage </h2>
    <button onClick={goToListTripsPage}>Voltar</button>
</div>

    )
}