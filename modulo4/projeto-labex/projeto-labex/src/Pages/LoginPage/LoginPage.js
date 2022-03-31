import React from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginPage () {
    const navigate = useNavigate()
    
    const goToHomePage = () => {
        navigate("/")
      }
    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
      }
    
    return (
<div>
    <h2> Eu sou a LoginPage </h2>
    <button onClick={goToHomePage}>Voltar</button>
    <button onClick={goToAdminHomePage}>Entrar</button>
</div>

    )
}