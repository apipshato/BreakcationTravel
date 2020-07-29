import React from 'react';
import propTypes from "prop-types";
import "./index.scss";

export default function Text(props) {
    return (
        <div>
            
        </div>
    )
}
Text.defaultProps={
    type: "text",
    patrern: "",
    placeholder: "Please type here. . .",
    errorResponse: "Please match the requested format."
};

Text.propTypes={
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange:propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    
}