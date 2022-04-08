import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import UseRequestData  from "../../hooks/useRequestData";
import { CardListTrip, ContainerAdmin, Trash, Animation } from "./style";
import Loading from "../../assets/animation.png"
import Labex from "../../assets/LabeX1.png"


function AdminHomePage() {
 const [listTrips, setListTrips, isLoading] = UseRequestData(`/trips`, {});
  const navigate = useNavigate();
  useProtectedPage()
 
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

  const deleteTrip = (id, name) => {
    const token = localStorage.getItem(`token`)
    const axiosConfig = {headers: {auth: token}}
    const confirmDel = window.confirm(`Tem certeza que deletar a viagem para ${name}`)
    if(confirmDel){
      axios.delete(`${BASE_URL}/trips/${id}`, axiosConfig)
      .then((res)=>{
        alert(`Viagem deletada`)
        setListTrips()
      })
      .catch((err)=>{
        alert(`Erro na Admin Page`)
      })
    }
  }

  return (
    <ContainerAdmin>
       <div>
          <img src={Labex} alt = ""/>
          </div>
      <h1>Painel Administrativo</h1>
      <div className="btns">
      <button onClick={goToHome}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar viagem</button>
      <button onClick={logout}>Logout</button>
      </div>
   
      {isLoading? <Animation src={Loading} alt= ""/> : listTrips.trips && listTrips.trips.map((trip)=>{
        return (
          <CardListTrip key={trip.id}>
            <div  onClick={()=> goToTripDetail(trip.id)}>
            <h3>{trip.name}</h3>
            </div>
          <button onClick={()=> deleteTrip(trip.id, trip.name)}><Trash/></button>
        </CardListTrip>
      )
      })}
    </ContainerAdmin>
  );
}

export default AdminHomePage