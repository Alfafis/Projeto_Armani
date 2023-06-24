import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const url = useLocation();
  return (
    <div className="navbar">
      <ul>
        {url.pathname.length > 1 && (
          <li>
            <Link to="/">
              <FaHome size={42} />
            </Link>
          </li>
        )}
        <li>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li>
          <Link to="/modalidade">Modalidades</Link>
        </li>
        <li>
          <Link to="/horario">Horários</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/login">
            <FaUser size={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
