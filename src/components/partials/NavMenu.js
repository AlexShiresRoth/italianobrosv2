import React from 'react';

import '../../style/main.css';

const NavMenu = (props) => {
   
        if(props.toggled === false){
            return(
                <div className="nav__icon"
                    onClick={props.onClick}>
                    <span className="nav__icon--line"></span>
                    <span className="nav__icon--line"></span>
                    <span className="nav__icon--line"></span>
                </div>
            )}
        if(props.toggled === true){
            return (
                <div className="nav__icon"
                    onClick={props.onClick}>
                    <span className="nav__icon--line-rotated"></span>
                    <span className="nav__icon--line-cleared"></span>
                    <span className="nav__icon--line-rotated"></span>
                </div>
            )
        }
    }

export default NavMenu;