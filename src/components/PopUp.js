import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PopUp(props) {
    return (
        <div className={props.className}>
            <h3>{props.message}</h3>
            <FontAwesomeIcon icon={props.icon} className="icon icon__bold"/>
        </div>
    );
}

export default PopUp;