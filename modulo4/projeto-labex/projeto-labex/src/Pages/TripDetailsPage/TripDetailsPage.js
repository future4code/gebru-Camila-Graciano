import React from 'react';
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage () {
    const navigate = useNavigate()
   


    const goToAdminPage = () => {
        navigate("/admin/trips/list")
      }
    
   return (
<div>
    <h2> Eu sou a TripDetailsPage </h2>
    <button onClick={goToAdminPage}>Voltar</button>
</div>

    )
}