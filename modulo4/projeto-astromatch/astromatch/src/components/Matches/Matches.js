import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DivContainer,DivListMatches,DivHeightMatches,DivRefreshMatches} from './Styled'
import {ImgMatches,IconMatchProfile} from './Styled'
import iconRefresh from '../../assets/Trash.png'

const urlOne = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-graciano/matches'
const urlTwo = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-graciano/clear'
function Matches (){

    const [listMatches,setListMatches] = useState([])

    const getMatches = ()=>{
        axios.get(urlOne)
        .then((res)=>{
            setListMatches(res.data.matches)
        })
        .catch((err)=>{
            alert('Erro: ',err.message)
        })
    }
    const putMatches = ()=>{
        axios.put(urlTwo)
        .then(()=>{
            alert('Matches limpos com sucesso !')
        })
        .catch(()=>{
            alert('Erro ao limpar os macthes')
        })
    }
    const onClickRefreshMatches = ()=>{
        putMatches()
    }
    useEffect(()=>{
        getMatches()
    },[])

    const newMatchesList = listMatches.map((match)=>{
        return(
            <DivListMatches key={match.id}>
                <ImgMatches src={match.photo}/>
                <h3>{match.name}</h3>
            </DivListMatches>
        )
    })
    return (
        <DivContainer>         
            <DivHeightMatches>
                {newMatchesList}
            </DivHeightMatches>               
            <DivRefreshMatches>
                <IconMatchProfile src={iconRefresh} onClick={onClickRefreshMatches}/>
            </DivRefreshMatches>  
        </DivContainer>
    )
}

export default Matches