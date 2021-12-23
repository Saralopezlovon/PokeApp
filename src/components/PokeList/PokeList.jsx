import React, {useContext} from "react";
import Card from "./Card/Card";
import { pokeContext} from '../../context/pokeContext'
import './PokeList.css';

const PokeList = () => {

  const {pokemon} =useContext(pokeContext)

  const paintPokemons = () =>{   
    return pokemon.map((item,i)=> <Card infoPokemon={item} key={i}/>)
  }

  return <div className="body-pokeList">
     {paintPokemons()}
    
    </div>;
};

export default PokeList;
