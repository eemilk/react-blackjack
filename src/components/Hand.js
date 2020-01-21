import React from 'react';
import Card from "./Card"
import '.././index.css';

const Hand = (props) => {
    console.log("this is hand");
    if (props.person == "player") {
        return(
            <div>
                <Card card="playercard" />
                <Card card="playercard" />
            </div>
        );        
    } else {
        return(
            <div>
                <Card card="dealercard" />
                <Card card="dealercard" />
            </div>
        );    
    }

}

export default Hand;