import React from 'react';

import MenuItem from '../MenuItemList/MenuItem/MenuItem'

import './MenuItemList.css';

const MenuItemList = props => {
    return (
        <ul className="menu-item-list">
            {props.categories.map(category => {
                return (
                    <MenuItem category={category} changeCategoryHandler={props.changeCategoryHandler} key={category.id}/>
                );
            })}
        </ul>
    );
}

export default MenuItemList;