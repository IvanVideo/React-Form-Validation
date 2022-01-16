import './Step1.css';
import Header from '../Header/Header';

function Step1() {

  return (
    <div>
      <Header />
      <div className='step1__conteiner'>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Step1;