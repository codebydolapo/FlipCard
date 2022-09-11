import React from "react";
import '../styles/collected.css'


function Collected({image}){
    return(
        <div className = {'collected'}>
            <img className = {'collected-nft'} src= {image} alt=''/>
        </div>
    )
}

export default Collected