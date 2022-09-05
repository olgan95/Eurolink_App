import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navigate, Link} from "react-router-dom";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

function ZarabiajWiecej(props) {
    if (!props.authenticated) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <>
                <div className="main-card">
                    <div className="main-card__header">
                        <Link to="/Dashboard">
                            <FontAwesomeIcon icon={faCircleArrowLeft} className="icon-back"/>
                        </Link>
                        <div className="main-card__header__title">
                            <h1>Jak zarabiać więcej?</h1>
                        </div>
                    </div>
                    <div className="main-card__content main-card_content__zarabiaj">
                        <div className="main-card__content__box">
                            <h3>Premie</h3>
                            <p>{props.userData.klient["Premie"]}</p>
                        </div>
                        <div className="main-card__content__box">
                            <h3>Nieobecności</h3>
                            <p>{props.userData.klient["Nieobecności"]}</p>
                        </div>
                        <div className="main-card__content__box">
                            <h3>Staż Pracy</h3>
                            <p>{props.userData.klient["Staż pracy"]}</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

export default ZarabiajWiecej;