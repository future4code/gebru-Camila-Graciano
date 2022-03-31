import React from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateTripPage () {
   
    const navigate = useNavigate()

    const goToAdminPage = () => {
        navigate("/admin/trips/list")
      }
   
   return (
<div>
    <h2> Eu sou a CreateTripPage </h2>
    <button onClick={goToAdminPage}>Voltar</button>
</div>

    )
}