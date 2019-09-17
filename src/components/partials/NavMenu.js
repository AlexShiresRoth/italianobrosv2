import React from 'react';

import layoutStyles from './navstyles/NavMenu.module.scss';

const NavMenu = (props) => {
   
        if(!props.toggled){
            return(
                <div className={layoutStyles.nb__icon}
                    onClick={props.onClick}>
                    <span className={layoutStyles.nb__line}></span>
                    <span className={layoutStyles.nb__line}></span>
                    <span className={layoutStyles.nb__line}></span>
                </div>
            )}
        if(props.toggled){
            return (
                <div className={layoutStyles.nb__icon}
                    onClick={props.onClick}>
                    <span className={layoutStyles.nb__line__rotated}></span>
                    <span className={layoutStyles.nb__line__cleared}></span>
                    <span className={layoutStyles.nb__line__rotated}></span>
                </div>
            )
        }
    }

export default NavMenu;