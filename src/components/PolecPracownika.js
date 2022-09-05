import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane, faCircleArrowLeft, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {Navigate, Link} from "react-router-dom";
import PopUp from "./PopUp";

function PolecPracownika(props) {
    const [form, setForm] = useState({
        imie: "",
        nazwisko: "",
        plec: "mezczyzna",
        numer: ""
    })
    const [popUp, setpopUp] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    function handleChange(event){
        const {value, name} = event.target
        setForm(prevFormData=>{
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        if (form.imie === ""){
            setError(true)
            setMessage("Imię nie może być puste")
        } else if (form.nazwisko === ""){
            setError(true)
            setMessage("Nazwisko nie może być puste")
        } else if (form.numer === ""){
            setError(true)
            setMessage("Numer nie może być pusty")
        }
        else {
            setpopUp(true)
            setForm({
                imie: "",
                nazwisko: "",
                plec: "mezczyzna",
                numer: ""
            })
        }

        setTimeout(()=>{
            setpopUp(false)
            setError(false)
        }, 5000)
    }

    if (!props.authenticated) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <>
                {popUp && <PopUp message = "Message Sent!" icon = {faPaperPlane} className="popUp"/> }
                {error &&
                    <PopUp message={message} icon={faCircleXmark} className="popUp popUp__Error"/>}

                <div className="main-card">
                    <div className="main-card__header">
                        <Link to="/Dashboard">
                            <FontAwesomeIcon icon={faCircleArrowLeft} className="icon-back"/>
                        </Link>
                        <div className="main-card__header__title main-card__header__polec">
                            <h1>Poleć pracownika</h1>
                            <h2>i zarób 150zł po przepracowanym miesiącu</h2>
                        </div>
                    </div>
                    <div className="main-card__content main-card__content__polec">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form__left">
                                    <label>Imię</label>
                                    <input
                                        type="text"
                                        name="imie"
                                        value={form.imie}
                                        onChange={handleChange}
                                    />
                                    <label>Nazwisko</label>
                                    <input
                                        type="text"
                                        name="nazwisko"
                                        value={form.nazwisko}
                                        onChange={handleChange}
                                    />

                                <fieldset>
                                        <label className="checkbox">
                                            <input
                                                type = "radio"
                                                id="kobieta"
                                                name="plec"
                                                value="kobieta"
                                                checked={form.plec === "kobieta"}
                                                onChange={handleChange}
                                            />
                                            Kobieta
                                        </label>
                                    <label className="checkbox">
                                        <input
                                            type = "radio"
                                            id="mezczyzna"
                                            name="plec"
                                            value="mezczyzna"
                                            checked={form.plec === "mezczyzna"}
                                            onChange={handleChange}
                                        />
                                        Mężczyzna
                                    </label>
                                </fieldset>

                            </div>
                            <div className="form__right">
                                    <label>Numer Telefonu</label>
                                    <input
                                        type="text"
                                        name="numer"
                                        value={form.numer}
                                        onChange={handleChange}
                                    />
                                <button className="button-primary">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>

            </>

        )
    }
}

export default PolecPracownika;