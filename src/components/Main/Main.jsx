import React, { useState, useEffect } from 'react';
import Form from '../Form';
import PokeList from '../PokeList';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'; //Para las rutas
import { useDebounce } from "use-debounce";

const Main = () => {
  const [input, setInput] = useState(""); //Estado inicial del input 
  const [pokemon, setPokemon] = useState([]); //Estado inicial de los pokemon
  const [debouncedText] = useDebounce(input, 2000);

  //Función parametrizada por el valor del input de Form y cambiar estado
  const setInfo = (pokemonSearched) =>{
    setInput({pokemonSearched})     
  }

  //Fetch con axios para obtener los datos del pokemon buscado y añadirlo al estado
  const getPokemon = async (item) =>{

    const pokemonName= item.pokemonSearched
    
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)

    const pokemonData = {
      name: resp.data.species.name,
      imagen: resp.data.sprites.front_default
    }
    setPokemon([...pokemon, pokemonData])    
  } 

  useEffect(() => {
    getPokemon(debouncedText)
  },[debouncedText]);

  return(<main >
  <Routes>    
    <Route path="/" element={<Form setInfo={setInfo}/>} />
    <Route path="/list" element={<PokeList infoPokemon={pokemon}/>} />                  
  </Routes>
</main>);
};

export default Main;
