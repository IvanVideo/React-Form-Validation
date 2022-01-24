import './Popup.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

function Popup() {
    const [disabled, setDisabled] = React.useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const popupValue = useSelector((state: State) => state.popup);
    const { timer } = bindActionCreators(actionCreators, dispatch);
    const time = useSelector((state: State) => state.timer);
    const popup = useSelector((state: State) => state.popup);

    const startTimer = () => {
        console.log(popup, '111')
        setDisabled(true)
        if (popup) {
            const btn = document.querySelector('.popup__button');
            let seconds = 20;

            let getTimer = setInterval(function () {
                seconds--;
                if (seconds < 10) {
                    timer(seconds)
                } else {
                    timer(seconds)
                }
                if (seconds <= 0) {
                    clearInterval(time);
                    timer(0)
                    setDisabled(false)
                }
            }, 1000);
        } else {
            console.log(popup, '222')
            return
        }
    }

    useEffect(() => {
        startTimer()

    }, [popup])

    return (
        <div className={popupValue ? 'popup-background' : 'hide'}>
            <div className='popup'>
                <p className='popup__title'>Подтверждение номера телефона</p>
                <p className='popup__number'>На номер телефона +7 (213) 123-12-33 отправлено СМС с кодом. Введите код из СМС в поле ниже.</p>
                <div className='popup__box'>
                    <label className='popup__timer'>Осталось 20 мин, 40 cек</label>
                    <input placeholder='Введите код из смс' className='popup__input'></input>
                    <span></span>
                </div>
                <div className='popup__button-box'>
                    <button id='btn' className='popup__button' onClick={startTimer} disabled={disabled} >Получить новый код</button>
                    <p id='timer'>через 00:{time<10?`0${time}`:time}</p>
                </div>
                <p>Назад</p>
                <p className='popup__sms'>*смс "1111"</p>
            </div>
        </div>
    );
}

export default Popup;