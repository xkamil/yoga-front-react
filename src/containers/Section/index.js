import React, {Component} from 'react';
import Text from "../../components/section/Text/index";

class Section extends Component {

    render() {
        const {section} = this.props;

        return (
            <div>
                <hr/>
                <h4>{section.name}</h4>
                <p>Components: {section.data.length}</p>
                {this.parseComponents(section.data)}
            </div>)
    }


    parseComponents(components) {
        return components.map(component => {
            switch (component.type) {
                case 'text' :
                    return <Text content={component.content}/>;
                default:
                    return <p>Unknown component type: {component.type}</p>
            }
        })
    }
}

export default Section;
