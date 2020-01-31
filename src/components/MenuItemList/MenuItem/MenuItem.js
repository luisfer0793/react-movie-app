import React from 'react';

import './MenuItem.css';

const MenuItem = props => {
    return (
        <li className="menu-item" onClick={() => props.changeCategoryHandler(props.category.id)}>
            <span className="menu-item-link">{props.category.name}</span>
        </li>
    );
}


export default MenuItem;