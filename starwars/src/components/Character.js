// Write your Character component here
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './Character.css'

function Characters (props){
        //setts up a card display from reactstrap. Set all the card text to the attributes taken from the starwars api.
    return(
       <Card body className="center" style={{backgroundColor: '#757575', border: 'solid 2px black',
       borderRadius: '5px', boxShadow: '20px 20px 5px rgba(0, 0, 0, 0.19)'}}>
           <CardTitle tag="h3">{props.card.name}</CardTitle>
           <CardText>Birth year: {props.card.birth_year}</CardText>
           <CardText>gender: {props.card.gender}</CardText>
            <CardText>Height: {props.card.height}</CardText>
            <CardText>Hair color: {props.card.hair_color}</CardText> 
       </Card> 
       
    );
}

export default Characters