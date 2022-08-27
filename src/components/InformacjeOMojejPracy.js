import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navigate, Link} from "react-router-dom";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function InformacjeOMojejPracy(props) {

    const images = props.userData.klient["Zdjęcia"].map((img, i)=>{
        return <img src={img} key={i} className="img"/>
    })

    const containerStyle = {
        width: '315px',
        height: '350px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };


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
                        <h1>Informacje o mojej pracy</h1>
                    </div>
                    <div className="main-card__content">
                        <div className="main-card__content__box">
                            <h3>Zdjęcia</h3>
                            {images}
                        </div>
                        <div className="main-card__content__box">
                            <h3>Jak dojechać</h3>
                            <LoadScript
                                googleMapsApiKey="AIzaSyBrAi9idA_iQf52bD7Tbw0pqzoWe9fsKTA"
                            >
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                    { /* Child components, such as markers, info windows, etc. */ }
                                    <></>
                                </GoogleMap>
                            </LoadScript>
                        </div>
                        <div className="main-card__content__box">
                            <h3>Ważne informacje</h3>
                            <p>{props.userData.klient["Ważne informacje"]}</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

export default InformacjeOMojejPracy;