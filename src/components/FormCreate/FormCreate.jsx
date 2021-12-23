import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { pokeContext} from '../../context/pokeContext'
import './FormCreate.css';

const FormCreate = () => {  

  const { register, handleSubmit } = useForm();

  const {createPokemon} = useContext(pokeContext)

  const onSubmit = (data)=>{
    createPokemon(data)
  }  

  return (<div className="body-container">

    <h1 className="title">Crea tu propio Pokemon</h1>

    <form className="formCreate"onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">ID: <br />
      <input className="input-number"type="number" placeholder="Id" required {...register("id")} />
      </label> <br />

      <label htmlFor="name">Nombre: <br />
      <input className="input-text" type="text" placeholder="Pokemon" required {...register("name")}/>
      </label><br />

      <label htmlFor="image">Imagen: <br />
      <input className="input-text" type="text" placeholder="Url imagen" required {...register("image")}/>
      </label><br />
 
      <label htmlFor="type1">Tipo 1: <br />
      <select className="input-select" name="type1" required {...register("type1")} >
        <option value="" disabled hidden>Tipo de pokemon</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Fairy">Fairy</option>
        <option value="Fighting">Fighting</option>
        <option value="Fire">Fire</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Grass">Grass</option>
        <option value="Ground">Ground</option>
        <option value="Ice">Ice</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Poison</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Water">Water</option>
      </select>
      </label><br />

      <label htmlFor="type2">Tipo 2: <br />
      <select className="input-select" name="type2" required {...register("type2")} >
        <option value="" disabled hidden>Tipo de pokemon</option>
        <option value="Bug">Bug</option>
        <option value="Dark">Dark</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Fairy">Fairy</option>
        <option value="Fighting">Fighting</option>
        <option value="Fire">Fire</option>
        <option value="Flying">Flying</option>
        <option value="Ghost">Ghost</option>
        <option value="Grass">Grass</option>
        <option value="Ground">Ground</option>
        <option value="Ice">Ice</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Poison</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Water">Water</option>
   
      </select>
      </label>

      <input className="form-submit" type="submit" />
      

    </form>



  </div>);
};

export default FormCreate;
