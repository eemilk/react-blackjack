import React from 'react';
import '.././index.css';

//Components
import Hand from "./Hand.js";
import Interface from "./Interface.js";
import Card from "./Card.js";
import Controls from "./Controls.js"

const Table = () => {
    console.log("this is table");
    return(
        <div>
        <Interface />
        <Hand />
        <Hand />
        <Controls />            
        </div>


    );
}

export default Table;