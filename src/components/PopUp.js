import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faCircleXmark, faXmark} from "@fortawesome/free-solid-svg-icons";

function PopUp(props) {
    return (
        <div className={props.className}>
            <h3>{props.message}</h3>
            <FontAwesomeIcon icon={props.icon} className="icon icon__bold"/>
        </div>
    );
}

export default PopUp;