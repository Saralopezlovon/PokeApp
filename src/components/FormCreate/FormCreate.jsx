import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { pokeContext} from '../../context/pokeContext'

const FormCreate = () => {  

  const { register, handleSubmit } = useForm();

  const {createPokemon} = useContext(pokeContext)

  const onSubmit = (data)=>{
    createPokemon(data)
  }  

  return (<div>

    <h1>Crea tu propio Pokemon</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">ID:
      <input type="number" placeholder="id" required {...register("id")} />
      </label>

      <label htmlFor="name">Nombre:
      <input type="text" placeholder="Pokemon" required {...register("name")}/>
      </label>

      <label htmlFor="image">Imagen:
      <input type="text" placeholder="Url imagen" required {...register("image")}/>
      </label>

      <label htmlFor="type1">Tipo 1:
      <select name="type1" value="" required {...register("type1")} >
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

      <label htmlFor="type2">Tipo 2:
      <select name="type2" value="" required {...register("type2")} >
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

      <input type="submit" />
      

    </form>



  </div>);
};

export default FormCreate;
