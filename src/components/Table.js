import React from 'react';
import '.././index.css';

//Components
import Hand from "./Hand.js";
import Interface from "./Interface.js";
import Card from "./Card.js";
import Controls from "./Controls.js"

import CardImages from ".././cards"

const Table = () => {

    const Deck = () => {
        const cardDeck = ["2C.png", "2D.png", "2H.png", "2S.png", "3C.png", "3D.png", "3H.png", "3S.png", "4C.png", "4D.png", "4H.png", "4S.png", "5C.png",
            "5D.png", "5H.png", "5S.png", "6C.png", "6D.png", "6H.png", "6S.png", "7C.png", "7D.png", "7H.png", "7S.png", "8C.png", "8D.png", "8H.png", "8S.png",
            "9C.png", "9D.png", "9H.png", "9S.png", "10C.png", "10D.png", "10H.png", "10S.png", "AC.png", "AD.png", "AH.png", "AS.png", "JC.png", "JD.png", "JH.png",
            "JS.png", "KC.png", "KD.png", "KH.png", "KS.png", "QC.png", "QD.png", "QH.png", "QS.png"];
            console.log(cardDeck.length);
    }
    const draftCard = () => {
        // TODO! add deck shuffle, this function returns drafted card
        return "JS.png"
    }
    
    Deck();
    //TODO! add right logic to send draftedCardImage to display
    let draftedCardImg = CardImages.src(".././cards/", draftCard());
    console.log("this is table");
    return(
        <div>
        <Interface />
        <Hand person="dealer" dealerDraftedCard1={draftedCardImg} dealerDraftedCard2="" />
        <Hand person="player" playerDraftedCard1="" playerDraftedCard2="" />
        <Controls />            
        </div>


    );
}

export default Table;