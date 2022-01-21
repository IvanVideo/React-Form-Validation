import './Popup.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store';

function Popup() {
    const navigate = useNavigate();
    const popupValue = useSelector((state: State) => state.popup);
    console.log(popupValue, '0101')
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
                    <p id='timer'>через 00:</p>
                </div>
                <p>Назад</p>
                <p className='popup__sms'>*смс "1111"</p>
            </div>
        </div>
    );
}

export default Popup;