import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPaperPlane,
    faCircleArrowLeft,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import {Navigate, Link} from "react-router-dom";
import PopUp from "./PopUp";
import Calendar from 'react-calendar';

function Urlop(props) {

    const [form, setForm] = useState({
        rodzaj: "wypoczynkowy",
        daty: []
    })
    const [popUp, setpopUp] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    //const [value, onChange] = useState(new Date());
    const [value, onChange] = useState("");

    function handleChange(event){
        const {value} = event.target
        setForm(prevFormData=>{
            return {
                ...prevFormData,
                rodzaj: value
            }
        })
    }

    function handleCalendarChange(event){

        const startDate = event[0].toDateString()
        const endDate = event[1].toDateString()

        onChange(event)

        setForm(prevFormData=>{
            return {
                ...prevFormData,
                daty: [startDate, endDate]
            }
        })

    }

    function handleSubmit(event){

        console.log(form.daty.length)

        if (form.daty.length===0){
            setError(true)
            setMessage("Daty nie mogą być puste")
        } else {
            setpopUp(true)
            setForm({
                rodzaj: "wypoczynkowy",
                daty: []
            })
            onChange("")
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
                        <div className="main-card__header__title">
                            <h1>Zgłoś Urlop</h1>
                        </div>
                    </div>
                    <div className="main-card__content main-card__content__urlop">
                        <div className="main-card__content__left main-card__content__type">
                            <fieldset>
                                <legend>Wybierz rodzaj urlopu</legend>
                                <label className="checkbox">
                                    <input
                                        type = "radio"
                                        id="wypoczynkowy"
                                        name="rodzaj"
                                        value="wypoczynkowy"
                                        checked={form.rodzaj === "wypoczynkowy"}
                                        onChange={handleChange}
                                    />
                                    Wypoczynkowy
                                </label>
                                <label className="checkbox">
                                    <input
                                        type = "radio"
                                        id="zdrowotny"
                                        name="rodzaj"
                                        value="zdrowotny"
                                        checked={form.rodzaj === "zdrowotny"}
                                        onChange={handleChange}
                                    />
                                    Zdrowotny
                                </label>
                                <label className="checkbox">
                                    <input
                                        type = "radio"
                                        id="żądanie"
                                        name="rodzaj"
                                        value="żądanie"
                                        checked={form.rodzaj === "żądanie"}
                                        onChange={handleChange}
                                    />
                                    Na żądanie
                                </label>
                            </fieldset>


                        </div>
                        <div className="main-card__content__right main-card__content__calendar">
                            <p>Wybierz okres urlopu</p>
                             <Calendar
                                    onChange = {handleCalendarChange}
                                    value={value}
                                    selectRange= {true}
                                    //allowPartialRange = {true}
                                />
                            <button className="button-primary"
                                    onClick={handleSubmit}>Wyślij</button>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Urlop;