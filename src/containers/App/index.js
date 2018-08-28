import React, {Component} from 'react';
import './App.css';
import Home from "../Home/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Portal from "../Portal/index";

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    // production code
}

class App extends Component {
    state = {loading: false};

    constructor() {
        super();

        this.state = {
            portals: []
        };

        fetch('https://yoga-server.herokuapp.com/api/portals')
            .then(resp => resp.json())
            .then(portals => this.setState({...this.state, portals},()=> console.log('updated portals')))

    }


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Home portals={this.state.portals}/>}/>
                    <Route path="/:portal" render={(props) => <Portal portal={this.getPortalData(props.match.params.portal)}/>}/>
                </Switch>
            </BrowserRouter>)
    }

    getPortalData(portalName){
        let portals = this.state.portals.filter(portal=>portal.name === portalName);

        return portals.length > 0 ? portals[0] : {};
    }
}

export default App;
