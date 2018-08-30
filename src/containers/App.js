import React, {Component} from 'react';
import Home from "./Home/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Portal from "./Portal/index";

const urlProd = 'https://yoga-server.herokuapp.com/api/portals';
const urlLocal = 'http://localhost:8080/api/portals';

class App extends Component {
    state = {loading: false};

    constructor() {
        super();

        this.state = {
            portals: []
        };

        fetch(urlLocal)
            .then(resp => resp.json())
            .then(portals => this.setState({...this.state, portals}, () => console.log('updated portals')))

    }


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Home portals={this.state.portals}/>}/>
                    <Route path="/:portal"
                           render={(props) => this.renderPortalIfExists(props.match.params.portal)}/>
                </Switch>
            </BrowserRouter>)
    }

    renderPortalIfExists(portalName) {
        const portals = this.state.portals.filter(portal => portal.name === portalName);

        if (portals.length > 0) {
            return <Portal portal={portals[0]}/>
        } else {
            return <Home portals={this.state.portals}/>
        }
    }
}

export default App;
