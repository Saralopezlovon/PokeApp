import React, {useContext} from "react";
import Card from "./Card/Card";
import { pokeContext} from '../../context/pokeContext'


const PokeList = () => {

  const {pokemon} =useContext(pokeContext)

  const paintPokemons = () =>{   
    return pokemon.map((item,i)=> <Card infoPokemon={item} key={i}/>)
  }

  
  return <>
    {paintPokemons()}
    </>;
};

export default PokeList;
