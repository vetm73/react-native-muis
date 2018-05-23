import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Menu.css';

const Menu = ( props ) => {
    return (
        <div className={ styles.container }>
            <Nav tabs>
                <NavItem>
                    <NavLink tag={ Link } to='/' exact>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ Link } to='/facturen'>Facturen</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#'>Item 3</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Menu;
