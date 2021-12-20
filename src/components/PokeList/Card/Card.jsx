import React from "react";

const Card = ({infoPokemon}) => {

  const {name, imagen} = infoPokemon

  return (

    <div>
        <h1>{name}</h1>      
        <img src={imagen} alt={name}/>

    </div>    
);
};

export default Card;
