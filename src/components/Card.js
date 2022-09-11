import React from "react";
import '../styles/card.css'
import { useSelector, useDispatch } from "react-redux";
import { setScore, setCollected, setCardsWon } from "../reducers/actions";
import { cards } from "../data/cards";
import Web3 from "web3";
import SequinCoin from '../abis/SequinCoin.json'
import { useEffect } from "react";

function Card({ id, image, randomIndex }) {

    const collected = useSelector(state => state.cardsWon)


    const dispatch = useDispatch()

    //fix duplicate rewards

    function matchCard() {
        //setDisplayImage(cards[id].url)
        if (id.toString() === randomIndex.toString()) {
            dispatch(setScore())
            dispatch(setCollected())
            if (collected.forEach((item) => item.id === id)) {
                alert("Already Selected: Reshuffle!")
            } else if (id.toString() === "0" && randomIndex.toString() === "0") {
                dispatch(setCardsWon(cards[0]))
            } else {
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


    //fetching the account address of the deployer
    const account = useSelector(state => state.account)

    //fetching the SequinCoin token contract and handling rewards
    async function handleReward() {
        const networkId = await Web3.eth.net.getId()
        const networkData = SequinCoin.networks[networkId]
        //fetching the token contract
        if (networkData) {
            const contractAddress = networkData.address;
            const contractABI = networkData.abi
            const tokenContract = new Web3.eth.Contract(contractABI, contractAddress)
            tokenContract.methods.mint(account, cards[id - 1].url.toString()) //calls the mint function in our smart contract
            .send({ from: account }) //allows the transaction to go. necessary with web3.js
            .on('transactionHash', (hash) => { //this is an event listener that simply listens for when the transaction comes through, and logs the hash
                console.log(hash)
            })
        }
    }



    return (
        <div className={'card'} onClick={matchCard}>
            <img className={'card-image'} src={image} alt='' />
        </div>
    )
}

export default Card