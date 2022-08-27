import React from 'react';

function Button(props) {
    return (
        <button className="button__login">{props.text}</button>
    );
}

export default Button;