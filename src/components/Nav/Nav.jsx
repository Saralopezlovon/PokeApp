import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (<nav><ul>
    <li><Link to="/">Lista de pokemons</Link></li>   
    <li><Link to="/new">Crear pokemon</Link></li> 
    <li><Link to="/search">Buscar pokemon</Link></li>       
  </ul></nav>);
};

export default Nav;
