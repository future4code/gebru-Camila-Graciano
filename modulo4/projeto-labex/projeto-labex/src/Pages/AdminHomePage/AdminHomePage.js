import React from 'react';
import { useNavigate } from "react-router-dom";


export default function AdminHomePage () {

const navigate = useNavigate();

const goToHome = () => {
    navigate(`/`)
  }

  const logout = () => {
    navigate(`/login`)
    localStorage.setItem("token", "")
  }

  const goToTripDetail = (id) => {
    navigate(`/admin/trips/${id}`)
  }
  const goToCreateTrip = () => {
    navigate(`/admin/trips/create`)
  }

    return (
<div>
    <h2> Eu sou a AdminHomePage </h2>
      <button onClick={goToHome}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar viagem</button>
      <button onClick={logout}>Logout</button>
      <button onClick={goToTripDetail}>Detalhes da viagem</button>
</div>

    )
}