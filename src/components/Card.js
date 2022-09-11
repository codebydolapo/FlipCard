import React from "react";
import '../styles/card.css'
import { blank } from "../data/cards";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScore, setCollected, setCardsWon } from "../reducers/actions";
import { cards } from "../data/cards";

function Card({ id, image, randomIndex }) {

    //const randomIndex = useSelector(state => state.randomIndex)

    const collected = useSelector(state => state.cardsWon)


    const dispatch = useDispatch()

    function matchCard() {
        if (id.toString() === randomIndex.toString()) {
            dispatch(setScore())
            dispatch(setCollected())
            if(id.toString() === "0" && randomIndex.toString() == "0"){
                dispatch(setCardsWon(cards[0]))
            } else{
                dispatch(setCardsWon(cards[id - 1]))
            }
            console.log(id, randomIndex)
            console.log(collected)
            alert("Right card! Here's an NFT")
        }
        else {
            alert('Wrong card, amigo. Try again!')
            console.log(id, randomIndex)
        }
    }




    return (
        <div className={'card'} onClick={matchCard}>
            <img className={'card-image'} src={image} alt='' />
        </div>
    )
}

export default Card