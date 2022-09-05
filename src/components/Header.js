import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


function Header(props) {
    return (
        <nav>
            <img src={require("../resources/logo.png").default} className="logo" />
            {props.authenticated && <div className="panelPracownika">
                <h1>Panel Pracownika /</h1>
                {Object.keys(props.userData).length !==0 && <h2 className="loggedInUser">{props.userData.pracownik.Imię} {props.userData.pracownik.Nazwisko}</h2>}
                <Link to="/Dashboard" onClick={props.logout}>
                    <FontAwesomeIcon icon={faHouseUser} className="home"/>
                </Link>
            </div>}
        </nav>
    );
}

export default Header;