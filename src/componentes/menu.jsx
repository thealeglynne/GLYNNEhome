import React from "react";
import { Dropdown, Navbar } from 'react-bootstrap';
import "../componentes/estilo /menu.css";

function MenuDesplegable() {
  return (
    <Navbar expand="md" className="menuDesplegable">
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <span className="navbar-toggler-icon"></span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#section1">Home</Dropdown.Item>
          <Dropdown.Item href="#col-md-2">Projects</Dropdown.Item>
          <Dropdown.Item href="#information">information</Dropdown.Item>
          <Dropdown.Item href="proceso">Process</Dropdown.Item>
          <Dropdown.Item href="#section3">Contacs</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}

export default MenuDesplegable;

  