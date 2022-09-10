import React from 'react'
import brain from '../brain.png'
import '.././styles/navbar.css'

function Navbar(){
    return(
        <dic className  = {"navbar"}>
            <div className = {"navbar-left"}>
           <img src={brain} className="brain" alt="" />
        <h1 className = {'nav-title'}>FlipCard</h1>
            </div>
            <div className = {"navbar-right"}>
                <div className = {'address-container'}>
                <p className = {'navbar-contactAddress'}>0x534A4B91bFc9582966fD88820dCB80853B74e2a1</p>
                </div>
            </div>
        </dic>
    )
}

export default Navbar