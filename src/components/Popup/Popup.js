import './Popup.css';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Popup() {
    const [value, setValue] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);
    const [verification, setVerification] = React.useState(false);
    const [time, setTime] = React.useState(20);
    const navigate = useNavigate();

    const startTimer = () => {
        console.log('111')
    }

    useEffect(() => {
        if (value == 1111) {
            setVerification(true)
            navigate('/step2');
        }

        const btn = document.getElementById("btn");
        if (btn.disabled) {
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }

        if (verification) {
            return
        } else {
            let seconds = 5;

            let time = setInterval(function () {
                seconds--;
                const timer = document.getElementById('timer');
                if (seconds < 10) {
                    setTime(`0${seconds}`)
                } else {
                    setTime(seconds)
                }
                if (seconds == 0) {
                    clearInterval(time);
                    timer.innerHTML = ''
                    setDisabled(false)

                }
            }, 1000);
        }
    }, [value, verification, disabled])

    const getVerifi = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={verification ? 'hide' : 'popup-background'}>
            <div className='popup'>
                <p className='popup__title'>Подтверждение номера телефона</p>
                <p className='popup__number'>На номер телефона +7 (213) 123-12-33 отправлено СМС с кодом. Введите код из СМС в поле ниже.</p>
                <div className='popup__box'>
                    <label className='popup__timer'>Осталось 20 мин, 40 cек</label>
                    <input placeholder='Введите код из смс' className='popup__input' onChange={getVerifi}></input>
                    <span></span>
                </div>
                <div className='popup__button-box'>
                    <button id='btn' className='popup__button' onClick={startTimer} disabled={disabled} >Получить новый код</button>
                    <p id='timer'>через 00:{time}</p>
                </div>
                <p>Назад</p>
                <p className='popup__sms'>*смс "1111"</p>
            </div>
        </div>
    );
}

export default Popup;