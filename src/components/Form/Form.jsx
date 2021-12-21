import React, { useContext } from "react";
import { pokeContext} from '../../context/pokeContext'

const Form = () => { 

  const {setInfo} =useContext(pokeContext)
  
  const handleChange = (event) =>{
    event.preventDefault();
    const pokemonSearched = event.target.value 
    setInfo(pokemonSearched)  
  }

  return ( <div>
    <h1>Busca un pokemon </h1>
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" id="pokemonSearched" name="pokemonSearched" placeholder="Buscar" onChange={handleChange}/>                        
      
    </form> 
  </div>);

};

export default Form;
