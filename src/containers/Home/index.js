import React, {Component} from 'react';
import PortalCard from "./PortalCard/index";
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <h1>Witamy w Body&Mind</h1>
            <h2>Wybierz interesujący cię temat wizyty</h2>
            {props.portals.map(portal => <PortalCard portal={portal}/>)}
        </div>
    );
};

export default Home;
