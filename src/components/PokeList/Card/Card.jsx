import React from "react";

const Card = ({infoPokemon}) => {

  const name = (infoPokemon.name).charAt(0).toUpperCase() + (infoPokemon.name).slice(1)

  const {imagen} = infoPokemon

  return (

    <div>
        <h1>{name}</h1>      
        <img src={imagen} alt={name}/>

    </div>    
);
};

export default Card;
