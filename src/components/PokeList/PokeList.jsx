import React from "react";
import Card from "./Card/Card"

const PokeList = (props) => {

  // const pokemonData = props.infoPokemon
  
  return (<div>
    <Card infoPokemon={props.infoPokemon} />
    </div>);
};

export default PokeList;
