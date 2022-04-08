import styled from "styled-components";

export const CardListTrip = styled.div`
display: flex;
flex-direction: column;
height: 29vh;
width: 25vw;
margin: 20px;
font-size: 18px;
font-weight: 500;
padding: 15px;
border-radius: 5px;
background-color: #f2f2f2;
color: #000;
box-shadow: 3px 3px 3px #000;
strong{
    color: #000;
    font-weight: 600;
}
`
export const ContainerTrips = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
h1{
    color: #f2f2f2;
}
`
export const NavButton = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 17vh;
width: 100vw;
padding-top: 50px;

.btn{
display: flex;
justify-content: center;

position: relative;

padding: 14px;
border-radius: 17px;

font-size: 18px;
font-weight: 600;

color: #000;
border: 2px solid #ffffff;
overflow: hidden;
cursor: pointer;
&:hover{
    color: #000;
}
}
.btn::before{
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;

    background-color: #ffffff;
    z-index: -1;
}
.item1::before{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-in;
}
.item1:hover{
            background-color: grey;
        }

.item2::before{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.item2:hover{
            background-color: grey;
        }

`
export const Animation = styled.img`
align-items: center;
justify-content: center;
width: 80vh;
margin: auto;
`
