import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/accion" className="navbar-link">Acción y Aventura</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/scifi" className="navbar-link">Ciencia Ficción</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/infantiles" className="navbar-link">Infantiles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;