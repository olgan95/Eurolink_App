import React from 'react';

function PopUpSend(props) {
    const {daty, rodzaj} = props.form

    return (
        <div className="PopUpSendBox">
            <div className="PopUpSendBox__text">
                <h2 className="PopUpSendBox__text__title">{props.text}</h2>
                <h3>Rodzaj urlopu:</h3> <h3 className="PopUpSendBox__text__selected">{rodzaj}</h3>
                <h3>Daty urlopu:</h3> <h3 className="PopUpSendBox__text__selected">{`${daty[0]} - ${daty[1]}`}</h3>
            </div>
            <div className="PopUpSendBox__buttons">
                <button className="button-success" onClick={props.handleSendData}>Tak, wyślij</button>
                <button className="button-error" onClick={props.handleCorrectData}>Nie, wróć</button>
            </div>
        </div>
    );
}

export default PopUpSend;