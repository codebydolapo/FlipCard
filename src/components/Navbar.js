import React from 'react'
import brain from '../brain.png'
import '.././styles/navbar.css'
import Web3 from 'web3'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAccount, setTokenSupply, addTokenURIs } from '../reducers/actions'
import SequinCoin from '../abis/SequinCoin.json'
import { FormText } from 'react-bootstrap'



function Navbar() {

    const [connect, setConnect] = useState(false)
    const [connectedState, setConnectedState] = useState(false)
    const [account, setAccount] = useState('')
    const [truncAccount, setTruncAccount] = useState('')

    const dispatch = useDispatch()

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            setConnectedState(true)
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            setConnectedState(true)
        } else {
            window.alert('Non-ethereum browser detected')
        }
    }

    async function loadBlockchainData() {
        await loadWeb3()
        const _web3 = window.web3
        const accounts = await _web3.eth.getAccounts();
        const account = accounts[0]
        const _truncAccount = `${account.slice(0, 8)}...${account.slice(account.length - 8)}`
        setTruncAccount(_truncAccount)
        dispatch(addAccount(account))

    }

    async function getNetworkData() {
        const networkId = await Web3.eth.net.getId()
        const networkData = SequinCoin.networks[networkId]
        //fetching the token contract
        if (networkData) {
            const contractAddress = networkData.address;
            const contractABI = networkData.abi
            const tokenContract = new Web3.eth.Contract(contractABI, contractAddress)
            //doing stuff with the fetched contract
            const totalSupply = await tokenContract.methods.totalSupply().call()
            dispatch(setTokenSupply(totalSupply))
            //load tokens
            let balanceOf = await tokenContract.methods.balanceOf(account).call()
            let tokenURIs = []
            for(let i = 0; i < balanceOf; i++){
                let id = await tokenContract.methods.tokenOfOwnerByIndex(account, i).call()
                let tokenURI = await tokenContract.methods.tokenURI(id).call()
                tokenURIs.push(tokenURI)
                dispatch(addTokenURIs(tokenURIs))
            }
        } else {
            alert("Smart Contract Not Deployed")
        }
    }

    useEffect(() => {
        if (connect === true) {
            loadBlockchainData()
            getNetworkData()
        }
    }, [connect])

    function toggleConnect() {
        if (connect) {
            setConnect(false)
        } else {
            setConnect(true)
        }
    }


    return (
        <dic className={"navbar"}>
            <div className={"navbar-left"}>
                <img src={brain} className="brain" alt="" />
                <h1 className={'nav-title'}>FlipCard</h1>
            </div>
            <div className={"navbar-right"}>
                <div className={'address-container'}>
                    {connect && <p className={'navbar-contactAddress'}>{truncAccount}</p>}
                    {!connect && <button className={'address-container'} onClick={toggleConnect}>Connect Your Wallet</button>}
                </div>
            </div>
        </dic>
    )
}

export default Navbar