export const addAccount = (account)=>{
    return{
        type: 'ADD_ACCOUNT',
        account
    }
}

export const setTokenSupply = (tokenSupply)=>{
    return{
        type: "ADD_TOKEN_SUPPLY",
        tokenSupply
    }
}

export const addTokenURIs = (tokenURIs)=>{
    return{
        type: "ADD_TOKEN_URIs",
        tokenURIs
    }
}

export const setCardArray = (cardArray)=>{
    return{
        type: '',
        cardArray
    }
}
export const setCardsChosen = (cardsChosen)=>{
    return{
        type: '',
        cardsChosen
    }
}
export const setCardsChosenId = (cardsChosenId)=>{
    return{
        type: '',
        cardsChosenId
    }
}

export const setCardsWon = (cardsWon)=>{
    return{
        type: "ADD_CARDS_WON",
        cardsWon
    }
}

export const setRandomArray = (randomArray)=>{
    return{
        type: 'ADD_RANDOM_PICS',
        randomArray
    }
}

export const addRandomIndex = (randomIndex)=>{
    return{
        type: "ADD_RANDOM_INDEX",
        randomIndex
    }
}

export const setScore = ()=>{
    return{
        type: "SET_SCORE",
    }
}

export const setCollected = ()=>{
    return{
        type: "SET_COLLECTED",
    }
}