import React from "react";
import '.././index.css';

const Card = (props) => {
    console.log("this is card");
    return (
        <div className="card">
            {props.cardType}
            {props.card}
        </div>
    );
}
 

export default Card;