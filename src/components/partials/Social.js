import React from 'react';

import '../../style/main.css';


const Social = (props) => {

    const renderSocialImages = props.icons.map((img,i) => {
        return ( 
            <a href={img.url} target="_blank" rel="noopener noreferrer" key={i}>
                <img className="icons" src={img.image} href={img.url} alt="social media icons"></img>
            </a>
        )
    });

    return (
        <div className="footer__section--container--column--left--icons">
            {renderSocialImages}
        </div>
    )
}

export default Social;
