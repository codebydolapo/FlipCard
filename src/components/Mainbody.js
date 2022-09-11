import '.././styles/mainbody.css'
import React from 'react'
import Card from './Card'
import Collected from './Collected'
import { blank, cards } from '../data/cards'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRandomArray, addRandomIndex } from '../reducers/actions'
import { randomArray } from '../reducers/reducers'
//import { useSelector } from 'react-redux'
import { useState } from 'react'

function Mainbody() {

    // useEffect(()=>{
    //     alert('Welcome! Click on play button to shuffle cards')
    // }, [])


    const [_randomIndex, setRandomIndex] = useState(null)
    const [picState, setPicState] = useState(false)
    const [randomCards, setRandomCards] = useState(cards)
    // const [score, setScore] = useState(0)
    // const [collected, setCollected] = useState(0)

    const dispatch = useDispatch()

    const score = useSelector(state => state.score)
    const collected = useSelector(state => state.cardsWon)
    const randomIndex = useSelector(state => state.randomIndex)




    function generateRandomCard() {
        // let _randomArray = []
        // _randomArray.push(Math.floor(Math.random() * 12))
        // dispatch(setRandomArray(_randomArray))
        let randomNumber = Math.floor(Math.random() * 13)
        setRandomIndex(randomNumber)
        dispatch(addRandomIndex(randomNumber))
        setPicState(true)
        setTimeout(() => setPicState(false), 2000)
        //console.log(picState)
        //randomizes the cards
        setRandomCards(cards.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value))
    }


    useEffect(() => {

    })


    return (
        <div className={'mainbody'}>
            <div className={'gameDiv'}>
                <div className={'card-container'}>
                    {randomCards.map(({ url, id }) => {
                        return <Card
                            image={picState ? url : blank}
                            key={id}
                            id={id}
                            randomIndex={_randomIndex ? cards[_randomIndex].id : _randomIndex == 13 ? 0 : Math.floor(Math.random() * 12)}
                        />
                    })}
                </div>
                <div className={'score-board'}>
                    <h1 className={'scoreboard-title'}>Scoreboard</h1>
                    <div className={'scoreboard-content'}>
                        <div className={'score-div'}>
                            <h1 className={'score'}>Score: <span>{score}</span></h1>
                            <h1 className={'score'}>Collected: <span>{collected.length}</span></h1>
                        </div>
                        <div className={'play-div'}>
                            <button className={'play-button'} onClick={generateRandomCard}>Play</button>
                            {/* <p>Click to shuffle deck, play game and win NFT</p> */}
                        </div>
                        <div className={'find'}>
                            {/* <h1 className={'find-title'}>Find:</h1> */}
                            <img className='find-image' src={_randomIndex != null ? cards[randomIndex].url : blank} alt='' />
                        </div>
                        <div className={'collected-nfts'}>
                            {/* <h1 className={'collection-title'}>Collection</h1> */}
                            <div className={'collection-div'}>
                                {collected.map(({ url }) => {
                                    return <Collected
                                        image={url}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainbody