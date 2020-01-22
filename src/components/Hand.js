import React from "react";
import Card from "./Card";
import ".././index.css";

const Hand = props => {
  console.log("this is hand");
  if (props.person == "dealer") {
    return (
      <div className="dealerCards">
        <Card cardType="dealercard1" card={props.dealerDraftedCard1} />
        <Card cardType="dealercard2" card={props.dealerDraftedCard2} />
      </div>
    );
  } else {
    return (
      <div className="playerCards">
        <Card cardType="playercard1" card={props.playerDraftedCard1}/>
        <Card cardType="playercard2" card={props.playerDraftedCard2} />
      </div>
    );
  }
};

export default Hand;
