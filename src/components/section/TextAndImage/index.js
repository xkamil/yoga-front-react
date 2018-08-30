import React, {Component} from 'react';
import './Text.css';
import {merge} from "../../../utils";

class TextAndImage extends Component {

    defaults = {
        title: '',
        lead: '',
        text: '',
        image: '',
        style: {
            image_align: 'left',
            image_size: 2,
            justify_content: true,
            indent_paragraph: true,
            margin: 100
        }
    };

    render() {
        const data = merge(this.defaults, this.props.component);
        const {title, lead, text, image} = data.content;

        console.log(this.props.component.content);
        console.log(data);

        const imgStyle = {
            float: data.style.image_align,
            width: (100 * data.style.image_size) + 'px',
            marginRight: data.style.image_align === 'left' ? 10 : 0,
            marginLeft: data.style.image_align === 'right' ? 10 : 0,
        };

        const textStyle = {
            textAlign: data.style.justify_content ? 'justify' : 'left',
            textIndent: data.style.indent_paragraph ? '30px' : 0
        };

        const containerStyle = {
            marginTop: parseInt(data.style.margin / 2),
            marginBottom: parseInt(data.style.margin / 2)
        };

        return (
            <div style={containerStyle}>
                {title && <h3>{title}</h3>}
                {lead && <h4>{lead}</h4>}
                {text && <p style={textStyle}>
                    {image && <img src={image} style={imgStyle}/>}{text}</p>}
            </div>)
    }
}

export default TextAndImage;
