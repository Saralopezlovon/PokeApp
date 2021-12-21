import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import { pokeContext } from './context/pokeContext'; //Para utilizar context en apertura -> value={input} 

import { useDebounce } from "use-debounce";
import axios from 'axios';

function App(props) {

  const [input, setInput] = useState("prueba"); //Estado inicial del input 
  const [pokemon, setPokemon] = useState([]); //Estado inicial de los pokemon
  const [debouncedText] = useDebounce(input, 2000);

  //Función parametrizada por el valor del input de Form y cambiar estado
  const setInfo = (pokemonSearched) =>{
    setInput({pokemonSearched})     
  }

  //Fetch con axios para obtener los datos del pokemon buscado y añadirlo al estado
  const getPokemon = async (item) =>{

    const pokemonName= item.pokemonSearched

    //Si el input esta lleno y el pokemon buscado NO existe en mi lista de pokemons, hazme el fetch

    if(pokemonName.toLowerCase() && !(pokemon.find(element => element.name === pokemonName.toLowerCase())) ){        

      try{
    
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)

        const name = (resp.data.species.name).charAt(0).toUpperCase() + (resp.data.species.name).slice(1)

        const pokemonData = {
          name: name,
          imagen: resp.data.sprites.versions["generation-v"]["black-white"].animated.front_default || resp.data.sprites.front_default  
        }

        setPokemon([...pokemon, pokemonData]) 
      
      }catch(err){
        console.log(err)
        }
  
      }   
  }

  useEffect(() => {
    getPokemon(debouncedText)
  },[debouncedText]);

  const dataP ={
    pokemon,
    setInfo
  }
  
  return (
    <div className="App">

        <BrowserRouter> 
            <Header/>
          <pokeContext.Provider value={dataP} >    
            <Main/>  
          </pokeContext.Provider>            
        </BrowserRouter>

        <Footer/>
  
  </div>
  );
}

export default App;
