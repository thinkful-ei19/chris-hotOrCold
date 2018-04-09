import React from 'react';

function NavList (props) {
    console.log(props);
    return (
        <ul className="nav__list">
            <li className="nav__list__item"><a href="#">How to Play</a></li>
            <li onClick={props.newGame} className="nav__list__item"><a href="#">Start New</a></li>
        </ul>
    )
}

export default NavList;