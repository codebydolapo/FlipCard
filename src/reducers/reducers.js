import { combineReducers } from "redux"

export const account = (state = '', action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return action.account
        default:
            return state
    }
}

export const tokenSupply = (state = 0, action) => {
    switch (action.type) {
        case "ADD_TOKEN_SUPPLY":
            return action.tokenSupply
        default:
            return state
    }
}

export const tokenURIs = (state = [], action) => {
    switch (action.type) {
        case "ADD_TOKEN_URIs":
            return action.tokenURIs
        default:
            return state
    }
}

export const cardArray = (state = [], action) => {
    switch (action.type) {
        case "ADD_CARD_ARRAY":
            return action.cardArray
        default:
            return state
    }
}

export const cardsChosen = (state = [], action) => {
    switch (action.type) {
        case "ADD_CARDS_CHOSEN":
            return action.cardsChosen
        default:
            return state
    }
}

export const cardsChosenId = (state = [], action) => {
    switch (action.type) {
        case "ADD_CARDS_CHOSEN_ID":
            return action.cardsChosenId
        default:
            return state
    }
}

export const cardsWon = (state = [], action) => {
    switch (action.type) {
        case "ADD_CARDS_WON":
            console.log(action.cardsWon)
            state.push(action.cardsWon)
            return state
        default:
            return state
    }
}

export const randomArray = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RANDOM_PICS':
            return action.randomArray
        default:
            return state
    }
}

const randomIndex = (state = 13, action) => {
    switch (action.type) {
        case "ADD_RANDOM_INDEX":
            return action.randomIndex
        default:
            return state
    }
}

export const score = (state = 0, action) => {
    switch (action.type) {
        case "SET_SCORE":
            return state + 10
        default:
            return state
    }
}

export const collected = (state = 0, action) => {
    switch (action.type) {
        case "SET_COLLECTED":
            return state + 1
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
    cardsWon,
    randomArray,
    randomIndex,
    score,
    collected
})