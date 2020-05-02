// Write your Character component here
import React, {useState, useEffect} from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';
import axios from 'axios'
import './Character.css'

function Characters (props){
    // stating the state of the data

    
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