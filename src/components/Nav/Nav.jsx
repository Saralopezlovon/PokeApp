import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (<nav><ul>
    <li><Link to="/search">Buscar pokemon</Link></li>       
    <li><Link to="/">Lista de pokemons</Link></li>   
    <li><Link to="/new">Crear pokemon</Link></li> 
  </ul></nav>);
};

export default Nav;
