import './Step1.css';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import { useRef } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actionCreators, State } from '../../store';

function Step1() {

  // const dispatch = useDispatch();
  // const { changeStatusPopup } = bindActionCreators(actionCreators, dispatch);
  // const popup = useSelector(state => state.popup);
  // console.log(popup, '111')
  const handleSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log('11')
  }

  return (
    <div>
      <Header />
      <div className='step1__conteiner'>
        <div className='step1__sistems'>
          <p className='step1__sistem'>Платежная система</p>
          <div className='step1__visa'/>
          <div className='step1__master'/>
          <div className='step1__mir'/>
          <div className='step1__currency'>
            <p>Валюта карты</p>
            <div className='step1__ruble'>₽</div>
          </div>
        </div>
        <form className='step1__form' onSubmit={handleSubmitForm}>
          <p className='step1__titile'>Личные данные</p>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>Фамилия*</label>
              <input
                className='step1__input'
                placeholder='Иванов'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Имя*</label>
              <input
                className='step1__input'
                placeholder='Иван'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <div className='step1__middlename'>
                <label className='step1__lable'>Отчество</label>
                <div className='step1__box-middlename'>
                  <input className='step1__checkbox' type='checkbox' id='checkbox'></input>
                  <label>нет отчества</label>
                </div>
              </div>
              <input
                className='step1__input'
                placeholder='Иванович'
              />
              <span className='step1__error'></span>
            </div>
          </div>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>Имя и фамилия на карте*</label>
              <input
                className='step1__input'
                placeholder='IVAN IVANOV'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Дата рождения*</label>
              <input
                className='step1__input'
                type='text'
                placeholder='01.01.1990'
                onFocus={(e) => (e.target.type = "date")}
              />
              <span className='step1__error'></span>
            </div>
          </div>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>E-mail</label>
              <input
                className='step1__input'
                placeholder='example@example.com'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Мобильный телефон*</label>
              <input
                className='step1__input'
                type='text'
                placeholder='+7 (xxx) xxx-xx-xx'
              />
              <span className='step1__error'></span>
            </div>
          </div>
          <p className='step1__titile'>Основной документ</p>
          <div className='step1__items'>
            <div className='step1__item step1__documents'>
              <label className='step1__lable'>Документ*</label>
              <select className='step1__select'>
                <option className='step1__option'>Паспорт гражданина РФ</option>
                <option className='step1__option' >Военный билет солдата(матроса, сержанта, старшины)</option>
                <option className='step1__option'>Вид на жительство в РФ</option>
                <option className='step1__option'>Паспорт иностранного гражданина</option>
              </select>
            </div>
          </div>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>Серия*</label>
              <input
                className='step1__input step1__passport'
                placeholder='Иванов'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Номер*</label>
              <input
                className='step1__input step1__passport'
                placeholder='Иван'
              />
              <span className='step1__error'></span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Дата выдачи*</label>
              <input
                className='step1__input'
                type='text'
                placeholder='01.01.1990'
              />
              <span className='step1__error'></span>
            </div>
          </div>
          <div className='step1__box'>
            <p className='step1__snoska'>* – поля обязательны для заполнения</p>
            <button className='step1__button'>Далее</button>
          </div>
        </form>
      </div>
      <Popup />
    </div>
  );
}

export default Step1;