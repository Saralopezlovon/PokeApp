import React from "react";

const Form = (props) => {

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const pokemonSearched = event.target.elements.pokemonSearched.value 
    props.setInfo(pokemonSearched)  
 
  }

  return ( <div>
    <h1>Busca un pokemon </h1>
    <form onSubmit={handleSubmit}>
      <input type="text" id="pokemonSearched" name="pokemonSearched" placeholder="Buscar"/>                         
      <button type="submit">Buscar</button>
    </form> 
  </div>);

};

export default Form;
