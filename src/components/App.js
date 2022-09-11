import React from 'react';
//import Web3 from 'web3'
import './App.css';
//import SequinCoin from '../abis/SequinCoin.json'
import Navbar from './Navbar';
import Mainbody from './Mainbody';
//import Web3 from 'web3';



function App() {

  // async function getNetworkData(){
  //   const networkId = await Web3.eth.net.getId()
  //   const networkData = SequinCoin.networks[networkId]
  //   if(networkData){
  //     const contractAddress = networkData.address;
  //     const contractABI = networkData.abi
  //     const token = new Web3.eth.Contract(contractABI, contractAddress)
  //   } else{
  //     window.alert("Smart Contract Not Deployed")
  //   }
  // }

  return (
    <div>
      <Navbar/>
      <Mainbody/>
    </div>
  )
}

export default App;



