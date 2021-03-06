import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import updateGenreAction from '../../redux/actions/update-genre-action';

import './Navigation.css';

const Navigation = props => {
    const dispatch = useDispatch();
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/accion" 
                          onClick={() => dispatch(updateGenreAction(43861))}
                          className="navbar-link">
                        Acción y Aventura
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/scifi" 
                          onClick={() => dispatch(updateGenreAction(43864))}
                          className="navbar-link">
                        Ciencia Ficción
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/infantiles" 
                          onClick={() => dispatch(updateGenreAction(43873))}
                          className="navbar-link">
                        Infantiles
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;