import './Step1.css';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';

function Step1() {
  const [values, setValues] = React.useState<any>({});
  const [errors, setErrors] = React.useState<any>({});
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch();
  const { changeStatusPopup } = bindActionCreators(actionCreators, dispatch);
  const { timer } = bindActionCreators(actionCreators, dispatch);
  const { userInfo } = bindActionCreators(actionCreators, dispatch);
  const popup = useSelector((state: State) => state.popup);
  const userInfoData = useSelector((state: State) => state.userInfo);

  // console.log(values, '01010')

  const handleChange = (event: { target: any; }) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    changeStatusPopup(popup)
    userInfo(values)
  }

  const disableInput = () => {
    const input = document.getElementById('middleName');
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  useEffect(() => {
    if(values.surname || values.name){
      console.log(values.surname, values.name, '01010')
    }
    resetForm();
  }, [resetForm, values.surname]);

  return (
    <div>
      <Header />
      <div className='step1__conteiner'>
        <div className='step1__sistems'>
          <p className='step1__sistem'>Платежная система</p>
          <div className='step1__visa' />
          <div className='step1__master' />
          <div className='step1__mir' />
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
                type='text'
                name="surname"
                onChange={handleChange}
                required
              />
              <span className='step1__error'>{errors.surname}</span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Имя*</label>
              <input
                className='step1__input'
                placeholder='Иван'
                type='text'
                name="name"
                onChange={handleChange}
                required
              />
              <span className='step1__error'>{errors.name}</span>
            </div>
            <div className='step1__item'>
              <div className='step1__middlename'>
                <label className='step1__lable'>Отчество</label>
                <div className='step1__box-middlename'>
                  <input className='step1__checkbox' type='checkbox' id='checkbox' onChange={disableInput}></input>
                  <label>нет отчества</label>
                </div>
              </div>
              <input
                className='step1__input'
                placeholder='Иванович'
                type='text'
                name="middleName"
                id='middleName'
                onChange={handleChange}
                disabled={false}
              />
              <span className='step1__error'>{errors.middlename}</span>
            </div>
          </div>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>Имя и фамилия на карте*</label>
              <input
                className='step1__input'
                placeholder='IVAN IVANOV'
                type='text'
                onChange={handleChange}
                name="cardName"
              />
              <span className='step1__error'>{errors.cardname}</span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Дата рождения*</label>
              <input
                className='step1__input'
                type='text'
                placeholder='01.01.1990'
                name="dateOfBorn"
                required
                onFocus={(e) => (e.target.type = "date")}
              />
              <span className='step1__error'>{errors.date}</span>
            </div>
          </div>
          <div className='step1__items'>
            <div className='step1__item'>
              <label className='step1__lable'>E-mail</label>
              <input
                className='step1__input'
                placeholder='example@example.com'
                type="email"
                name="email"
                onChange={handleChange}
              />
              <span className='step1__error'>{errors.email}</span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Мобильный телефон*</label>
              <input
                className='step1__input'
                type='text'
                placeholder='+7 (xxx) xxx-xx-xx'
                pattern="^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$"
                name="mobile"
                required
                onChange={handleChange}
              />
              <span className='step1__error'>{errors.mobile}</span>
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
                placeholder='xxxx'
                type='text'
                name="series"
                pattern="[0-9]*"
                required
                onChange={handleChange}
              />
              <span className='step1__error'>{errors.series}</span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Номер*</label>
              <input
                className='step1__input step1__passport'
                placeholder='xxxxxx'
                pattern="[0-9]*"
                required
                onChange={handleChange}
              />
              <span className='step1__error'>{errors.number}</span>
            </div>
            <div className='step1__item'>
              <label className='step1__lable'>Дата выдачи*</label>
              <input
                className='step1__input'
                type='text'
                name="dateOfIssue"
                placeholder='01.01.1990'
                required
                onFocus={(e) => (e.target.type = "date")}
                onChange={handleChange}
              />
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