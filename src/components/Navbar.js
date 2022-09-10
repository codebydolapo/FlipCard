import React from 'react'
import brain from '../brain.png'
import '.././styles/navbar.css'
import Web3 from 'web3'
import { useEffect, useState } from 'react'


function Navbar() {

    const [connect, setConnect] = useState(false)

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            setConnect(true)
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            setConnect(true)
        } else {
            window.alert('Non-ethereum browser detected')
        }
    }

    async function loadBlockchainData() {
        await loadWeb3()
        const _web3 = window.web3
        const accounts = await _web3.eth.getAccounts();
        const account = accounts[0]
        alert(account)

    }

    useEffect(() => {
        if (connect === true) {
            loadBlockchainData()
        }
    }, [connect])


    return (
        <dic className={"navbar"}>
            <div className={"navbar-left"}>
                <img src={brain} className="brain" alt="" />
                <h1 className={'nav-title'}>FlipCard</h1>
            </div>
            <div className={"navbar-right"}>
                <div className={'address-container'}>
                    {/* <p className = {'navbar-contactAddress'}>0x534A4B91bFc9582966fD88820dCB80853B74e2a1</p> */}
                    <button className={'address-container'} onClick={loadBlockchainData}>Connect Your Wallet</button>
                </div>
            </div>
        </dic>
    )
}

export default Navbar