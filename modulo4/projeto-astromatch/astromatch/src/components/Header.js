import React from "react";
import styled from "styled-components"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Title from '../assets/AstroMatch.png'
import Logo from '../assets/love.png'

const StyledHeader = styled.header`
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
`;

const StyledLogo = styled.img`
    height: 5vw;
    object-fit: contain;
`;

const StyledTitle = styled.img`
 object-fit: contain;
height: 4vw;
`;

function Header () {
    return(
<StyledHeader>
    <StyledLogo src= {Logo} alt = "" />
    <StyledTitle src={Title} alt= ""/> 
  <ChatBubbleOutlineIcon fontSize="large"/>
</StyledHeader>
    );
}

export default Header;