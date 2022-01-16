import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className='header__conteiner'>
                <div>
                    <p className='header__title'>Оставьте заявку на СберКарту</p>
                    <p className='header__subtitle'>Бесплатное обслуживание при выполнении условий</p>
                    <div className='header__box'>
                        <p className='header__step'>Шаг 1 из 2</p>
                        <div className='header__wall' />
                        <p className='header__position'>Личные данные</p>
                    </div>
                    <div className='header__indications'>
                        <div className='header__indication' />
                        <div className='header__indication' />
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