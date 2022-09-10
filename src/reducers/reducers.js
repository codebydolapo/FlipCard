import { combineReducers } from "redux"

export const account = (state = '', action)=>{
    switch(action.type){
        case "ADD_ACCOUNT":
            return action.account
        default:
            return state
    }
}

export const tokenSupply = (state = 0, action)=>{
    switch(action.type){
        case "ADD_TOKEN_SUPPLY":
            return action.tokenSupply
        default:
            return state
    }
}

export const tokenURIs = (state = [], action)=>{
    switch(action.type){
        case "ADD_TOKEN_URIs":
            return action.tokenURIs
        default:
            return state
    }
}

export const cardArray = (state=[], action)=>{
    switch(action.type){
        case "ADD_CARD_ARRAY":
            return action.cardArray
        default:
            return state
    }
}

export const cardsChosen = (state=[], action)=>{
    switch(action.type){
        case "ADD_CARDS_CHOSEN":
            return action.cardsChosen
        default:
            return state
    }
}

export const cardsChosenId = (state=[], action)=>{
    switch(action.type){
        case "ADD_CARDS_CHOSEN_ID":
            return action.cardsChosenId
        default:
            return state
    }
}

export const cardsWon = (state=[], action)=>{
    switch(action.type){
        case "ADD_CARDs_WON":
            return action.cardsWon
        default:
            return state
    }
}

export const allReducers = combineReducers({
    account,
    tokenURIs,
    tokenSupply,
    cardArray,
    cardsChosen,
    cardsChosenId,
    cardsWon
})