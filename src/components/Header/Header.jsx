import React from "react";
import Nav from '../Nav/Nav';
import './Header.css';
import pikachu  from '../../assets/pikachu.png'

const Header = () => {
  return (<header>
      <img className="logoPokemon" src={pikachu} alt="pika" />
      <Nav/>
    </header>);
};

export default Header;
