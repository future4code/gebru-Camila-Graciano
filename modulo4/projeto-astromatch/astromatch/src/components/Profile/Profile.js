import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ImgProfile,DivContainer,AlignImgBio,DivContentProfile,BioProfile} from './Styled'
import {IconMatchProfile,DivLikeDislike,DivRefreshMatches} from './Styled'
import iconLike from '../../assets/like.png'
import iconDislike from '../../assets/cancel.png'
import iconRefresh from '../../assets/refresh.png'

const urlOne = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-graciano/person'
const urlTwo = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-graciano/choose-person'
const urlThree = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-graciano/clear'

function Profile (){
    const [profiles,setProfiles]=useState({})
    const [choiceProfile,setChoiceProfile]=useState(false)
    const [renderComponent,setRenderComponent]=useState(false)

    const getProfileToChoose = ()=>{
        axios.get(urlOne) 
        .then((res)=>{
            setProfiles(res.data.profile)            
        })
        .catch((err)=>{
            alert(`Erro ${err}`)
        })
    }

    const postChooseMatches = ()=>{
        const body={
            id:profiles.id,
            choice:choiceProfile
        }
        axios.post(urlTwo,body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            alert('Erro: ',err.message)
        })
    }

    const putMatches = ()=>{
        axios.put(urlThree)
        .then(()=>{
            alert('Matches limpos com sucesso !')
        })
        .catch(()=>{
            alert('Erro ao limpar os macthes')
        })
    }

    const onClickLike = ()=>{
        setChoiceProfile(true)            
        setRenderComponent(!renderComponent)
        postChooseMatches()
    }

    const onClickDislike = ()=>{
        setChoiceProfile(false)                
        setRenderComponent(!renderComponent)
        postChooseMatches()
    }

    const onClickRefreshMatches = ()=>{
        putMatches()
    }
            
    useEffect(()=>{
        getProfileToChoose()
    },[renderComponent])
            
    return(    
        <DivContainer>    
            <div>                    
                <AlignImgBio>
                    <ImgProfile src={profiles.photo} alt='foto'/>                                
                </AlignImgBio>
                <DivContentProfile>
                    <h2>{profiles.name} , </h2>    
                    <h2>{profiles.age}</h2>                                                  
                </DivContentProfile>
                <BioProfile>{profiles.bio}</BioProfile>  
                
            </div>                    
            <DivLikeDislike>                
                <div>
                    <IconMatchProfile src={iconDislike} onClick={onClickDislike}/>
                </div>
                <div>
                    <IconMatchProfile src={iconLike} onClick={onClickLike}/>
                </div>                        
            </DivLikeDislike>
            <DivRefreshMatches>
                <IconMatchProfile src={iconRefresh} onClick={onClickRefreshMatches}/>
            </DivRefreshMatches>           
        </DivContainer>
    )
}
export default Profile