import './Popup.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

function Popup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const popupValue = useSelector((state: State) => state.popup);
    const { timer } = bindActionCreators(actionCreators, dispatch);
    const time = useSelector((state: State) => state.timer);
    const popup = useSelector((state: State) => state.popup);

    useEffect(() => {

        if (popup) {
            console.log(popup, '111')
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
                }
            }, 1000);
        } else {
            console.log(popup, '222')
        }
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
                    <button id='btn' className='popup__button' >Получить новый код</button>
                    <p id='timer'>через 00:{time}</p>
                </div>
                <p>Назад</p>
                <p className='popup__sms'>*смс "1111"</p>
            </div>
        </div>
    );
}

export default Popup;