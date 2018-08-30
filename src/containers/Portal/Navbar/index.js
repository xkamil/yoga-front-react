import React, {Component} from 'react';
import {Link} from "react-router-dom";


const Navbar = (props) => {
    const {portal} = props;
    const sections = portal ? portal.sections || [] : [];


    const menuItem = (portalName, sectionName, label) => <li className="nav-link">
        <Link className="nav-link" to={`/${portalName}/${sectionName}`}>{label}</Link></li>;

    const menuItems = sections.map(section => menuItem(portal.name, section.name, section.label));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to={`/`}>Yoga</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {menuItems}
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;