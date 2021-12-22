import React from "react";

const Card = ({infoPokemon}) => {

  const name = (infoPokemon.name).charAt(0).toUpperCase() + (infoPokemon.name).slice(1)
  const type1 = (infoPokemon.type1).charAt(0).toUpperCase() + (infoPokemon.type1).slice(1)
  const type2 = (infoPokemon.type2).charAt(0).toUpperCase() + (infoPokemon.type2).slice(1)

  const {imagen, id } = infoPokemon

  return (

    

    <div>
        <h1>{name}</h1>
        <p>ID:{id}</p>      
        <img src={imagen} alt={name}/>
        <p>Tipo 1:{type1}</p>
        {type2?<p>Tipo 2:{type2}</p>:""}
        
    </div>    
);
};

export default Card;
