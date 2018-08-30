import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './PortalCard.css';

const PortalCard = (props) => {
    const {name, label, image} = props.portal;

    return (
        <Link to={name}
              className="portal-card-content justify-content-center"
              style={{backgroundImage: `url(${image})`}}>{label}</Link>
    );
};

export default PortalCard;
