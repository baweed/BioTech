import './contacts.css';

export function Contacts() {
    return (
        <section id='contacts' className="contacts">
            <div className="contacts__container">
                <div className="contacts__info">
                    <h2 className="contacts__title">Контакты</h2>
                    <p>ООО "Полигон-Аксай"</p>
                    <p>Юридический адрес: 346720, Ростовская область, г. Аксай, пер. Спортивный, д.1, оф. 13</p>
                    <p>ИНН 6102067887, КПП 610201001, ОГРН 1176196025202</p>
                    <p>Телефон: <a href="tel:+78635044723">+7-863-504-47-23</a></p>
                    <p>Email: <a href="mailto:poligon-aksay@mail.ru">poligon-aksay@mail.ru</a></p>
                    <p>
                        Отдел по работе с юридическими и физическими лицами: 346720, Ростовская область, г. Аксай, ул. Менделеева, д.53, оф. 24,25
                    </p>
                </div>
                <div className="contacts__map-wrapper">
                    <a
                        href="https://yandex.ru/maps/org/poligon_tbo/78738923654/?utm_medium=mapframe&utm_source=maps"
                        className="contacts__map-link contacts__map-link--org"
                    >
                        Полигон ТБО
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.813144%2C47.332936&mode=poi&poi%5Bpoint%5D=39.811293%2C47.333358&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D78738923654&source=mapframe&um=constructor%3A7e4e9e2e6c2c6b7e8e9e1e2e6c2c6b7e8e9e1e2e6c2c6b7e8e9e1e2e6c2c6b7e&utm_source=mapframe&z=16.02"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen
                        className="contacts__map-iframe"
                    ></iframe>
                </div>
            </div>
        </section >
    );
}

export default Contacts;