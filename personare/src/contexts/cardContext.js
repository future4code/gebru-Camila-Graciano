import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CardContext = createContext();

const CardProvider = ({ children }) => {

    const [card, setCard] = useState([])
    const [path, setPath] = useState([])
    const [flip, setFlip] = useState([true])

    console.log(card)


    useEffect(() => {

        getCard();

        getPath();
    });

    const getCard = async () => {
        const responde = await axios.get('/tarot.json')

        setCard(responde.data.cards)
    }

    const getPath = async () => {
        const response = await axios.get('/tarot.json')
        setPath(response.data)
    }

    const handleFlipCard = () => {

        setFlip(!flip)
    }

    const image_path = path.imagesUrl;
    const back_card = path.imageBackCard;

    return (

        <CardContext.Provider value={{ card, path, image_path, back_card, flip, handleFlipCard }} >
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider;

