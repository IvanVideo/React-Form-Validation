import './Start.css';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/step1');
  }

  return (
    <section>
      <div className='start__conteiner'>
        <h1 className='start__title'>Три шага к новой СберКарте</h1>
        <div className='start__items'>
          <div className='start__item title'>
            <div className='start__circle'>1</div>
            <p className='item__title'>Заполните заявку</p>
            <p className='item__subtitle'>Это займёт 2 минуты, нужны только номер паспорта и телефон</p>
          </div>
          <div className='start__arrow' />
          <div className='start__item title'>
            <div className='start__circle'>2</div>
            <p className='item__title'>Дождитесь СМС</p>
            <p className='item__subtitle'>Мы сообщим, когда и где забрать карту по её готовности</p>
          </div>
          <div className='start__arrow' />
          <div className='start__item title'>
            <div className='start__circle'>3</div>
            <p className='item__title'>Заберите карту</p>
            <p className='item__subtitle'>Приходите в офис банка с паспортом</p>
          </div>
        </div>
        <button className='start__button'
          onClick={handleButtonClick}
        >
          Оформить онлайн
        </button>
      </div>
    </section>
  );
}

export default Start;