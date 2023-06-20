import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const url = useLocation();
  return (
    <div className="navbar">
      <ul>
        {url.pathname.length > 1 && (
          <li>
            <Link to="/">home</Link>
          </li>
        )}
        <li>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li>
          <Link to="/modalidade">Modalidade</Link>
        </li>
        <li>
          <Link to="/horario">Horario</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="telainicial">telainicial</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
