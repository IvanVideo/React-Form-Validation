import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Header() {
    const [positionValue, setPositionValue] = React.useState(true);
    const [step, setStep] = React.useState('');

    const url = window.location.pathname;

    useEffect(() => {
        if (url === '/step1') {
            setPositionValue(false)
            setStep(1)
        } else {
            setStep(2)
        }
    }, [url])

    return (
        <div>
            <div className='header__conteiner'>
                <div>
                    <p className='header__title'>Оставьте заявку на СберКарту</p>
                    <p className='header__subtitle'>Бесплатное обслуживание при выполнении условий</p>
                    <div className='header__box'>
                        <p className='header__step'>Шаг {step} из 2</p>
                        <div className='header__wall' />
                        <p className='header__position'>Личные данные</p>
                    </div>
                    <div className='header__indications'>
                        <div className={positionValue ? 'header__indication' : 'header__indication-green'} />
                        <div className={positionValue ? 'header__indication-green' : 'header__indication'} />
                    </div>
                </div>
                <div className='header__card'>
                    <p className='header__disign'>Закажите свой дизайн на карте</p>
                    <p className='header__price'>+ 500 ₽</p>
                    <Link to='#' className='header__link'><p className='header__select'>Выбрать</p></Link>
                    <div className='header__img' />
                </div>
            </div>
        </div>
    );
}

export default Header;