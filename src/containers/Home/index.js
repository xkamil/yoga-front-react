import React, {Component} from 'react';
import PortalCard from "./PortalCard/index";
import './Home.css';

const Home = (props) => {

    return (
        <div className="row align-items-center justify-content-center" style={{minHeight: '100vh'}}>

            <div className="col-sm-12 col-md-10 col-xl-8 ">
                <div className="row">
                    {props.portals.map(portal =>
                        <div className="col-6 nopadding">
                            <PortalCard portal={portal}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
