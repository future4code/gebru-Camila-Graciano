import styled from "styled-components";

export const CotainerDetail = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: start;
justify-items: center;

padding-top: 40px;
width: 100vw;
height: 100vh;
color: #f2f2f2;
.button{
    font-size: 16px;
    font-weight: 600;
    color: #000;
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
`

export const CardsCandidates = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;

height: 30vh;
width: 21.5vw;
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
export const Animation = styled.img`
width: 10vh;
margin-left: 18em;
`

export const DetailTrip = styled.div`
color: #f2f2f2;
font-size: 18px;
h1{
    padding-bottom: 30px;
}
padding-bottom: 40px;
`

export const StyleButton = styled.div`
display: flex;
width: 20vw;
justify-content: space-between;
.btn{
    position: relative;

    padding: 10px;
    border-radius: 17px;

    font-size: 18px;
    font-weight: 600;

    color: #000;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
}
@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #3f3d56;
            box-shadow: 0 0 0 0 #3f3d56;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #3f3d56;
            box-shadow: 0 0 10px 0px #3f3d56;
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #3f3d56;
            box-shadow: 0 0 0 0 #3f3d56;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #3f3d56;
            box-shadow: 0 0 10px 0px #3f3d56;
  }
}
.item1{
    color: #ffffff;
    background-color: #19a312;
    border: 2px solid #19a312;
    z-index: 2;
}

.item2{
    color: #ffffff;
    background-color: #ff6584;
    border: 2px solid #ff6584;
    z-index: 2;
  
}
`
