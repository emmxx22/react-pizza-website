import React from 'react';
import {Nav, NavLink, NavIcon, Bars } from './NavbarElement';

const Navbar = ({toggle}) => {
  return (
    <>
       <Nav>
          <NavLink to="/">Pizzeria</NavLink>
          <NavIcon onClick={toggle}>
            <p>menu</p>
            <Bars/>
          </NavIcon>
       </Nav>
    </>
  );
}

export default Navbar;
