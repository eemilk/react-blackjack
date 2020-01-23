import React from "react";
import '.././index.css';

const Card = (props) => {
    console.log("this is card");
    return (
        <div className="card">
            {props.cardType}
            <img src={props.card1} alt="" crop="fill" height="200"/>
            <img src={props.card2} alt="" crop="fill" height="200"/>
        </div>
    );
}
 

export default Card;