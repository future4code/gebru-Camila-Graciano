import React, {useState} from 'react'
import Profile from '../Profile/Profile'
import Matches from '../Matches/Matches'
import {DivHeaderProfile,Title,DivIconMatch} from './Styled'
import {IconMatchProfile,DivHeaderMatches,DivIconProfile} from './Styled'
import {DivContainer,DivProfilesMatches} from './Styled'
import iconMatch from '../../assets/talk.png'
import iconBack from '../../assets/love.png'
import TitleIcon from '../../assets/AstroMatch.png'




function Header () {
  const [switchScreen,setSwitchScreen]=useState(true)

  const onClickchangeState = ()=>{
    setSwitchScreen(!switchScreen)
  }
  
  const switchComponent = ()=>{
    if (switchScreen){
      return (
        <DivProfilesMatches>              
            <DivHeaderProfile>
                <div>
                    <Title src={TitleIcon}/>
                </div>                    
                <DivIconMatch>
                    <IconMatchProfile src={iconMatch} onClick={onClickchangeState}/>
                </DivIconMatch>               
            </DivHeaderProfile>           
            <Profile/>
        </DivProfilesMatches>      
      )
    }else{
      return (
        <DivProfilesMatches>
            <DivHeaderMatches>
                <DivIconProfile>
                    <IconMatchProfile src={iconBack} onClick={onClickchangeState}/>
                </DivIconProfile>  
                <div>
                <Title src={TitleIcon}/>
                </div>                                 
            </DivHeaderMatches> 
            <Matches/>
        </DivProfilesMatches>               
      )
    }  
  }
  return(
    <DivContainer>                          
        {switchComponent()}               
    </DivContainer>
  )
}

export default Header

