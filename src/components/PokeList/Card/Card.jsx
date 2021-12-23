import React from "react";
import './Card.css';


const Card = ({infoPokemon}) => {

  const name = (infoPokemon.name).charAt(0).toUpperCase() + (infoPokemon.name).slice(1)
  const type1 = (infoPokemon.type1).charAt(0).toUpperCase() + (infoPokemon.type1).slice(1)
  const type2 = (infoPokemon.type2).charAt(0).toUpperCase() + (infoPokemon.type2).slice(1)

  const {image, id } = infoPokemon

  return (  
    <div className="card">
        <h1 className="title-card">{name}</h1>
        <img className="img-card"src={image} alt={name}/>
        <p className="id-card"><b>ID: {id}</b></p>      
        <p className="type1"><b>Tipo 1: {type1}</b></p>
        {type2?<p className="type2"><b>Tipo 2: {type2}</b></p>:""}
        
    </div>    
);
};

export default Card;
