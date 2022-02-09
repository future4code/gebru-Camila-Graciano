import React from 'react'
import styled from 'styled-components'

const Header = styled.header `
    display:flex;
    flex-direction:column;
    align-items: center;
    width:40%;
    height:60vh;
    border:2px solid black;
    margin:0 auto;
`

const Input = styled.input`
    width: 180px;
    margin: bottom;
    text-align: center;
    
`

const Label = styled.label`
    color: black;
`

const Title = styled.h1`

`
const Select = styled.select`
width: 180px;
    margin: bottom;
    text-align: center;
    
`


class Etapa1 extends React.Component {


    render(){
        

        return (  
                
            <>
                <Header>
                    <Title>Dados Gerais</Title>
                    
                    <Label>Digite seu nome</Label>
                <Input placeholder = 'Nome' />
                    <Label>Digite sua Idade</Label>
                <Input placeholder = 'Idade'/>
                    <Label>Digite o seu Email </Label>
                <Input placeholder = 'Email'/>
                    <Label>Qual o grau de escolaridade</Label> 

                    <Select>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </Select>
                </Header>



         
            
            </>


        ) 


    }}

    export default Etapa1