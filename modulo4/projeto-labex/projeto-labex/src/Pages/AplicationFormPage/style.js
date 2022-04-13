import styled from "styled-components";

export const ContainerForms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
h1{
    margin-top: 50px;
    color: #f2f2f2;
    padding-bottom: 30px;
}
div{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    width: 20.5vw;
    .btn{
    font-size: 18px;
    font-weight: 600;
    color:  #000;
    margin: 10px;
    padding: 13px;
    width: 100px;
    border-radius: 15px;
    border: 2px solid #ffffff;
    background-color: #ffffff;
    cursor: pointer;
    &:hover{
        color: #000;
        background-color: grey;
        transition: all 600ms ease;
    }
} 
}

`
export const SelectStyle = styled.select`
width: 20.5vw;
height: 6vh;
margin: 10px;
border-radius: 10px;
`

export const InputStyle = styled.input`
width: 20.5vw;
height: 6vh;
margin: 10px;
border-radius: 10px;
border: 1px solid #f2f2f2;
padding-left: 10px;
`
