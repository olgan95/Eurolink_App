import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faPhone,
    faEnvelope,
    faPaperPlane,
    faCircleArrowLeft,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import {Navigate, Link} from "react-router-dom";
import PopUp from "./PopUp";

function Kontakt(props) {

    const [message, setMessage] = useState("")
    const [popUp, setpopUp] = useState(false)
    const [error, setError] = useState(false)

    function handleChange(event){
        const {value} = event.target.value
        setMessage(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        setMessage("")

        message === "" ? setError(true) : setpopUp(true)

        setTimeout(()=>{
            setError(false)
            setpopUp(false)
        }, 5000)
    }

    if (!props.authenticated) {
        return <Navigate replace to="/" />;
    } else {
    return (
        <>
            {popUp && <PopUp message = "Message Sent!" icon = {faPaperPlane} className="popUp"/> }
            {error &&
                <PopUp message="Wiadomość nie może być pusta!" icon={faCircleXmark} className="popUp popUp__Error"/>}

            <div className="main-card">
                <div className="main-card__header">
                    <Link to="/Dashboard">
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="icon-back"/>
                    </Link>
                    <div className="main-card__header__title">
                        <h1>Skontaktuj się z koordynatorem</h1>
                    </div>
                </div>
                <div className="main-card__content main-card__content__kontakt">
                    <div className="main-card__content__koordynator-info">
                        <p>Twoim koordynatorem jest:</p>
                        <div className="koordynator-info-card">
                            <div className="koordynator-info-details koordynator-info-details__bold">
                                <img src={props.userData.koordynator["Zdjęcie"]} className="koordynator_img"/>
                                <p>{props.userData.koordynator["Koordynator"]}</p>
                            </div>
                            <div className="koordynator-info-details">
                                <FontAwesomeIcon icon={faPhone} className="icon"/>
                                <p>{props.userData.koordynator["Numer Telefonu"]}</p>
                            </div>
                            <div className="koordynator-info-details">
                                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                <p>{props.userData.koordynator["Email"]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card__content__koordynator-message">
                        <p>Wiadomość do koordynatora:</p>
                        <form onSubmit={handleSubmit}>
                        <textarea
                            rows="3"
                            cols="30"
                            name="message"
                            value={message}
                            onChange={handleChange}
                        />
                            <button className="button-primary">Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
    }
}

export default Kontakt;