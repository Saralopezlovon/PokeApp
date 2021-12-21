import React from "react";

const Form = (props) => {

  
  const handleChange = (event) =>{
    event.preventDefault();
    const pokemonSearched = event.target.value 
    props.setInfo(pokemonSearched)  
 
  }

  return ( <div>
    <h1>Busca un pokemon </h1>
    <form >
      <input type="text" id="pokemonSearched" name="pokemonSearched" placeholder="Buscar" onChange={handleChange}/>                        
      
    </form> 
  </div>);

};

export default Form;
