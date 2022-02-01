import './Popup.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Popup() {
    const [disabled, setDisabled] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');
    const [timeSms, setTimeSms] = React.useState(20);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const popupValue = useSelector((state: State) => state.popup);
    const { changeStatusPopup } = bindActionCreators(actionCreators, dispatch);
    const popup = useSelector((state: State) => state.popup);

    const startTimer = () => {
        setDisabled(true)
        if (popup) {
            let seconds = 20;

            let getTimer = setInterval(function () {
                seconds--;
                if (seconds < 10) {
                    setTimeSms(seconds)
                } else {
                    setTimeSms(seconds)
                }
                if (seconds <= 0) {
                    clearInterval(timeSms);
                    setTimeSms(0)
                    setDisabled(false)
                }
            }, 1000);
            return
        } else {
            return
        }
    }

    const handleClosePopup = () => {
        changeStatusPopup(popup)
        // clearInterval(time);
    }

    useEffect(() => {
        startTimer()
        if (inputValue == '1111') {
            changeStatusPopup(popup)
            navigate('/step2');
        }
    }, [popup, inputValue])

    return (
        <div className={popupValue ? 'popup-background' : 'hide'}>
            <div className='popup'>
                <p className='popup__title'>Подтверждение номера телефона</p>
                <p className='popup__number'>На номер телефона +7 (213) 123-12-33 отправлено СМС с кодом. Введите код из СМС в поле ниже.</p>
                <div className='popup__box'>
                    <input placeholder='Введите код из смс' className='popup__input' onChange={(e) => { setInputValue(e.target.value) }}></input>
                    <span></span>
                </div>
                <div className='popup__button-box'>
                    <button id='btn' className={disabled ? 'popup__button_disabled' : 'popup__button'} onClick={startTimer} disabled={disabled} >Получить новый код</button>
                    <p id='timer'>через 00:{timeSms < 10 ? `0${timeSms}` : timeSms}</p>
                </div>
                <Link className='popup__link' to='#' onClick={handleClosePopup}><p>Назад</p></Link>
                <p className='popup__sms'>*смс "1111"</p>
            </div>
        </div>
    );
}

export default Popup;