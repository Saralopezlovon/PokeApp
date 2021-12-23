import React, { useContext } from "react";
import { pokeContext} from '../../context/pokeContext';
import './Form.css';

const Form = () => { 

  const {setInfo} =useContext(pokeContext)
  
  const handleChange = (event) =>{
    event.preventDefault();
    const pokemonSearched = event.target.value 
    setInfo(pokemonSearched)  
  }

  return ( <div className="bodyFormSearch">
    <h1 className="titleSection">¡Busca tus pokemon favoritos! </h1>
    <form className="formSearch" onSubmit={(e)=>{e.preventDefault()}}>
      <input className="inputSearch" type="text" id="pokemonSearched" name="pokemonSearched" placeholder="Nombre pokemon" onChange={handleChange}/>                        
      <p className="note">Ve a la lista de pokemon para verlos</p>
    </form> 
  </div>);

};

export default Form;
