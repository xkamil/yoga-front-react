import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Section from "../Section/index";
import './Portal.css';
import Navbar from "./Navbar/index";


class Portal extends Component {

    constructor() {
        super();

        this.state = {
            portals: []
        }
    }

    getSectionData(sectionName) {
        let sections = this.props.portal.sections.filter(section => section.name === sectionName);

        return sections.length > 0 ? sections[0] : [];
    }

    render() {
        const {portal} = this.props;

        let renderedPortal = null;

        if (portal) {
            renderedPortal = <div className="portal">
                <div className="portal-top" style={{backgroundImage: `url(${portal.image_top})`}}>
                    <div className="col-sm-12 col-lg-8 offset-lg-2">
                        <h1 className="title">{portal.label}</h1>
                        <Navbar portal={portal}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-8 offset-lg-2">
                        <div className="p-3">
                            <Switch>
                                <Route path={`/${portal.name}/:section`}
                                       render={(props) => <Section section={this.getSectionData(props.match.params.section)}/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        } else {
            renderedPortal = <p>Loading portal...</p>
        }

        return (renderedPortal)
    }
}

export default Portal;
