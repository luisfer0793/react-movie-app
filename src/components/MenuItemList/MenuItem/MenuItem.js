import React from 'react';

import './MenuItem.css';

const MenuItem = props => {
    return (
        <li className="menu-item">
            <span className="menu-item-link">{props.category.name}</span>
        </li>
    );
}


export default MenuItem;