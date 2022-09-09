import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faPaperPlane, faCircleXmark, faXmark} from '@fortawesome/free-solid-svg-icons'
import PopUp from "./PopUp";

function LogIn(props) {

    function togglePasswordFunction(){
        const password = document.querySelector('#id_password');
        const togglePasswordEye = document.querySelector('#togglePasswordEye');
        const togglePasswordEyeSlash = document.querySelector('#togglePasswordEyeSlash');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePasswordEye.classList.toggle('hide');
        togglePasswordEyeSlash.classList.toggle('hide');
    }

    const [LoginData, setLoginData] = useState(
        {
            email: '',
            password: ''
        }
    )
    const [error, setError] = useState(false)

    function handleChange(event){
        const {name, value} = event.target
        setLoginData(prevLoginData=>{
            return{
                ...prevLoginData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setError(false)

        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {'Content-Type' : 'application/json'},
        //     body: JSON.stringify({
        //         email: 'jan.kowalski@eurolink.pl',
        //         password: 'pracownik1'
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))

        fetch('https://my-json-server.typicode.com/olgan95/eurolink_app/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <>
            {error &&
                <PopUp message="Hasło i/lub login są błędne!" icon={faCircleXmark} className="popUp popUp__Error"/>}


            <form className="LogIn" onSubmit={handleSubmit}>
                <label>Login</label>
                <input
                    type="text"
                    name="email"
                    value={LoginData.email}
                    onChange={handleChange}
                />
                <label>Hasło</label>
                <div className="password">
                    <input
                        type="password"
                        name="password"
                        value={LoginData.password}
                        onChange={handleChange}
                        id="id_password"
                    />
                    <FontAwesomeIcon icon={faEye} className="eye" id="togglePasswordEye" onClick={togglePasswordFunction}/>
                    <FontAwesomeIcon icon={faEyeSlash} className="eye hide" id="togglePasswordEyeSlash" onClick={togglePasswordFunction}/>
                    {/*{error && <p className="ErrorMessage"></p>}*/}
                </div>

                <button className={"button-primary"}>
                    Zaloguj
                </button>

            </form>
        </>

    );
}

export default LogIn;