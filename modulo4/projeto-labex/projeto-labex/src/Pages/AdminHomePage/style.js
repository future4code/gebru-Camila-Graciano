import styled from "styled-components";
import { FaTrash } from "react-icons/fa"

export const ContainerAdmin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100vw;
height: 100vh;

img{
    width: 35vw;
    margin-top: 3vw;
    object-fit: cover;
    align-items: center;
    justify-content: center;
}

h1{
    color: #ffffff;
}
.btns{
    display: flex;
    justify-content: space-around;
    margin: 20px;
    width: 25vw;
    color: #000;
    button{
        font-size: 15px;
        background-color: #f2f2f2;
        border: 2px solid #f2f2f2;
        padding: 13px;
        border-radius: 15px;
        cursor: pointer;
        color: #000;
        &:hover{
            background-color:grey;
        }
    }
}
`

export const CardListTrip = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

margin: 15px;
width: 25vw;
height: 6vh;
padding: 0 15px;


color: #3f3d56;
background-color: #f2f2f2;
border-radius: 10px;
cursor: pointer;
&:hover{
    background-color: #ffffff;
}
div{
    h3{
        width: 19vw;
        height: 3vh;
    }
}
`
export const Trash = styled(FaTrash)`
color: #3f3d56;
height: 20px;
width: 20px;
&:hover{
    color: #ff6584;
    background-color: #ffffff;
}
`
export const Animation = styled.img`
align-items: center;
justify-content: center;
width: 80vh;
margin: auto;
`

