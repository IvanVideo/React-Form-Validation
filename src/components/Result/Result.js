import './Result.css';
import logo from '../../images/Sber_logo.png';

function Result() {
    return (
        <div className="result">
            <h1 className='result__title'>Поздравляем!</h1>
            <p className='result__subtitle'>Карта уже готовится. Мы обязательно свяжимся с вами заранее и оповестим как можно ее забрать</p>
            <img src={logo} className='result__logo' />
        </div>
    );
}

export default Result;