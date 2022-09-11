import React from "react";
import '../styles/card.css'
import { blank } from "../data/cards";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScore, setCollected } from "../reducers/actions";

function Card({id, image, randomIndex}){

    //const randomIndex = useSelector(state => state.randomIndex)

    const dispatch = useDispatch()

    function matchCard(){
        if(id.toString() === randomIndex.toString()){
            dispatch(setScore())
            dispatch(setCollected()) 
            alert("Right card! Here's an NFT")
        }else if(randomIndex === 13){
            alert("Click Play!")
        } else{
            alert('Wrong card, amigo. Try again!')
            console.log(id, randomIndex)
        }
       }

    


    return(
        <div className={'card'} onClick = {matchCard}>
            <img className = {'card-image'} src = {image} alt = ''/>
        </div>
    )
}

export default Card