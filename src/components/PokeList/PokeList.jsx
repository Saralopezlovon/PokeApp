import React from "react";
import Card from "./Card/Card"

const PokeList = (props) => {

  const paintPokemons = () =>{   
    return props.infoPokemon.map((item,i)=> <Card infoPokemon={item} key={i}/>)
  }

  
  return <>
    {paintPokemons()}
    </>;
};

export default PokeList;
