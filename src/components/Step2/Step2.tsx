import './Step2.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../store';

function Step2() {
  const userInfoData = useSelector((state: State) => state.userInfo);

  console.log(userInfoData, 'получил из редакса')
  return (
    <div>
      <Header />
      <div className='step2__conteiner'>
        <div className='step2__info'>
          <p className='step2__title'>Личные данные</p>
          <div className='step2__box'>
            <div className='step2__item'>
              <label className='step2__lable'>Фамилия*</label>
              <p className='step2__response'>{userInfoData.surname}</p>
            </div>
            <div className='step2__item'>
              <label className='step2__lable'>Имя*</label>
              <p className='step2__response'>{userInfoData.name}</p>
            </div>
            <div className='step2__item'>
              <label className='step2__lable'>Отчество*</label>
              <p className='step2__response'>{userInfoData.middleName}</p>
            </div>
          </div>
          <div className='step2__box'>
            <div className='step2__item'>
              <label className='step2__lable'>Имя и фамилия на карте</label>
              <p>IVANOV IVAN</p>
            </div>
            <div className='step2__item'>
              <label className='step2__lable'>Дата рождения</label>
              <p>{userInfoData.dateOfBorn}</p>
            </div>
          </div>
          <div className='step2__box'>
            <div className='step2__item'>
              <label className='step2__lable'>E-mail</label>
              <p>{userInfoData.email}</p>
            </div>
            <div className='step2__item'>
              <label className='step2__lable'>Мобильный телефон*</label>
              <p>{userInfoData.mobile}</p>
            </div>
          </div>
          <div>
            <p className='step2__title'>Основной документ</p>
            <div className='step2__box'>
              <div className='step2__item'>
                <label className='step2__lable'>Документ</label>
                <p className='step2__response'>{userInfoData.dateOfIssue}</p>
              </div>
            </div>
            <div className='step2__box'>
              <div className='step2__item'>
                <label className='step2__lable'>Серия</label>
                <p className='step2__response'>{userInfoData.series}</p>
              </div>
              <div className='step2__item'>
                <label className='step2__lable'>Номер</label>
                <p className='step2__response'>{userInfoData.number}</p>
              </div>
              <div className='step2__item'>
                <label className='step2__lable'>Дата выдачи</label>
                <p className='step2__response'>{userInfoData.dateOfIssue}</p>
              </div>
            </div>
            <div className='step2__footer'>
              {/* <Link to='/step2'>Изменить</Link>
            <Link to='/result'><button className='step2__button'>Подтвердить</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;