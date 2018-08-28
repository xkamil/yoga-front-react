import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './PortalCard.css';

const PortalCard = (props) => {
    const {name, label, image} = props.portal;

    return (
        <div className="portal-card">
            <Link to={name} className="portal-card-content" style={{backgroundImage: `url(${image})`}}>
                {label}
            </Link>
        </div>
    );
};

export default PortalCard;
