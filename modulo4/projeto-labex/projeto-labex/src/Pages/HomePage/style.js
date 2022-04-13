import styled from "styled-components";


export const ContainerHome = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-device-width: 480px){
   display: flex;
   flex-direction: column;
}
`
export const DivButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50vw;
button{
    font-size: 20px;
    color:  #ffffff;
    margin: 20px;
    padding: 25px;
    width: 12vw;
    border-radius: 20px;
    border: 2px solid #ffffff;
    background-color: rgb(20, 20, 20);
    cursor: pointer;
    &:hover{
        font-size: 17px;
        -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both center;
	    animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both center;
        color: #000;
        font-weight: 800;
        background-color: #ffffff;
        transition: all 600ms ease;
    }
}
img{
    width: 37vw;
    margin-top: 7vw;
    margin-bottom: 3vw;
    object-fit: cover;
    align-items: center;
    justify-content: center;
}
@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #f2f2f2;
            box-shadow: 0 0 0 0 #f2f2f2;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #f2f2f2;
            box-shadow: 0 0 20px 0px #f2f2f2;
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #f2f2f2;
            box-shadow: 0 0 0 0 #f2f2f2;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #f2f2f2;
            box-shadow: 0 0 20px 0px #f2f2f2;
  }
}
`