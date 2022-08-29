import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navigate, Link} from "react-router-dom";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, useJsApiLoader, MarkerF, LoadScript  } from '@react-google-maps/api';

function InformacjeOMojejPracy(props) {

    const images = props.userData.klient["Zdjęcia"].map((img, i)=>{
        return <img src={img} key={i} className="img"/>
    })

    const containerStyle = {
        width: '100%',
        height: '89%'
    };

    const client_lat = props.userData.klient["Lokalizacja"][0]
    const client_long = props.userData.klient["Lokalizacja"][1]

    const url = `https://maps.google.com/?q=${client_lat},${client_long}`

    const center = {
        lat: client_lat,
        lng: client_long
    };

    const position = {
        lat: client_lat,
        lng: client_long
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBrAi9idA_iQf52bD7Tbw0pqzoWe9fsKTA"
    })

    const onLoadMarker = marker => {
        console.log('marker: ', marker)
    }

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
                    <div className="main-card__content main-card__content__informacje">
                        <div className="main-card__content__box">
                            <h3>Zdjęcia</h3>
                            {images}
                        </div>
                        <div className="main-card__content__box main-card__content__box__map">
                            <h3>Jak dojechać</h3>
                            {isLoaded &&
                                <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={15}
                                streetView="false"
                            >
                                <MarkerF
                                    onLoad={onLoadMarker}
                                    position={position}
                                    onClick={e => window.open(url, "_blank")}
                                />
                            </GoogleMap>}

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