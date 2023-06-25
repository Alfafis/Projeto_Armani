import { Link } from 'react-router-dom';
import { VscAccount, VscHome } from 'react-icons/vsc';

import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <VscHome size={42} />
          </Link>
        </li>
        <li>
          <Link to="/About">Quem Somos</Link>
        </li>
        <li>
          <Link to="/Modality">Modalidades</Link>
        </li>
        <li>
          <Link to="/Schedule">Horários</Link>
        </li>
        <li>
          <Link to="/Contact">Contato</Link>
        </li>
        <li>
          <Link to="/Login">
            <VscAccount size={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
