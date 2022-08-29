import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane, faCircleArrowLeft, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {Navigate, Link} from "react-router-dom";
import PopUp from "./PopUp";

function Awaria(props) {

    const [form, setForm] = useState({
        imie: props.userData.pracownik["Imię"],
        nazwisko: props.userData.pracownik["Nazwisko"],
        adres: "",
        rodzaj: "",
        opis: ""
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

        if (form.opis===""){
            setError(true)
            setMessage("Wiadomość nie może być pusta")
        } else if (form.imie === ""){
            setError(true)
            setMessage("Imię nie może być puste")
        } else if (form.nazwisko === ""){
            setError(true)
            setMessage("Nazwisko nie może być puste")
        } else if (form.adres === ""){
                setError(true)
            setMessage("Adres nie może być pusty")
        }
        else {
            setpopUp(true)
            setForm({
                imie: props.userData.pracownik["Imię"],
                nazwisko: props.userData.pracownik["Nazwisko"],
                adres: "",
                rodzaj: "hydraulika",
                opis: ""
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
                        <h1>Zgłoś awarię na mieszkaniu</h1>
                    </div>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form__left form__left__awaria">
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
                                <label>Adres</label>
                                <input
                                    type="text"
                                    name="adres"
                                    value={form.adres}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form__right form__right__awaria">
                                <label>Rodzaj Awarii</label>
                                <select
                                    id= "rodzaj"
                                    value = {form.rodzaj}
                                    onChange={handleChange}
                                    name="rodzaj"
                                >
                                    <option value = "hydraulika">Hydraulika</option>
                                    <option value = "elektryka">Elektryka</option>
                                    <option value = "inne">Inne</option>
                                </select>
                                <label>Opis Awarii</label>
                                <textarea
                                    rows="3"
                                    cols="30"
                                    name="opis"
                                    value={form.opis}
                                    onChange={handleChange}
                                />
                                <button className="button-primary">Wyślij</button>
                            </div>
                        </form>
                </div>
            </>
        )
    }
}

export default Awaria;