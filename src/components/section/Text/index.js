import React, {Component} from 'react';
import './Text.css';

class Text extends Component {

    render() {
        const {title, lead, text} = this.props.component.content;

        return (
            <div>
                {title && <h3>{title}</h3>}
                {lead && <h4>{lead}</h4>}
                {text && <p>{text}</p>}
            </div>)
    }
}

export default Text;
