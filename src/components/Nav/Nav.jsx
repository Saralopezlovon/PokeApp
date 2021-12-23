import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (<nav><ul>
    <li><Link to="/search">Buscar Pokemon</Link></li>       
    <li><Link to="/">Lista de Pokemon</Link></li>   
    <li><Link to="/new">Crear Pokemon</Link></li> 
  </ul></nav>);
};

export default Nav;
