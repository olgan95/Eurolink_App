import React, {useEffect, useState} from 'react';
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
    const [userCheck, setUserCheck] = useState([])


    function handleChange(event){
        const {name, value} = event.target
        setLoginData(prevLoginData=>{
            return{
                ...prevLoginData,
                [name]: value
            }
        })
    }

    useEffect(()=>{
        let login_user
        const login = fetch('https://my-json-server.typicode.com/olgan95/eurolink_app/pracownicy')
            .then(response => response.json())
            .then(data => {
                login_user = data
            })
            .catch(error => {
                console.log(error);
            });

        const loggedinUser = login.then(r=>{
            setUserCheck(login_user)
        })
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        setError(false)
        const userChecked = userCheck[0]

        if (userChecked.email === LoginData.email && userChecked.password === LoginData.password) {
            props.authenticate(userChecked)
        }
        else{
            setError(true)
        }

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