import React, {Component} from 'react';
import Text from "../../components/section/Text/index";
import TextAndImage from "../../components/section/TextAndImage/index";

class Section extends Component {

    render() {
        const {section} = this.props;

        return (
            <div>
                <h1>{section.label}</h1>
                <hr/>
                {this.parseComponents(section.data)}
            </div>)
    }


    parseComponents(components) {
        return components.map(component => {
            switch (component.type) {
                case 'text' :
                    return <Text component={component}/>;
                case 'text_and_image' :
                    return <TextAndImage  component={component}/>;
                default:
                    return <p>Unknown component type: {component.type}</p>
            }
        })
    }
}

export default Section;
