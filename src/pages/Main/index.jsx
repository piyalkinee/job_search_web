import './style.css'
import './style-mobile.css'
import './style-tablet.css'
import './style-desktop.css'

const MainPage = () => (
    <div className='main-page'>
        <div className='main-page-welcome-block'>
            <div className='main-page-welcome-block-b1'>
                <h1>Работа в Казахстане</h1>
                <h2>Работа для всех специальностей</h2>
                <button className='main-page-button'>Список вакансий</button>
            </div>
            <div className='main-page-welcome-block-b2'>
                <a className='main-page-for-applicant' href="/applicant">Для работадателей</a>
            </div>
        </div>
        <div className='main-page-services'>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
            <div className='main-page-services-block'>
                <h3>Особенность</h3>
                <p>Текст</p>
            </div>
        </div>
        <div className='main-page-about-us'>
            <div className='main-page-about-us-block-b1'>
                <button className='main-page-button'>Мы в телеграм</button>
            </div>
            <div className='main-page-about-us-block-b2'>
                <p className='main-page-info' href="/applicant">© Вакансии 2024</p>
            </div>
        </div>
    </div>
);

export default MainPage;