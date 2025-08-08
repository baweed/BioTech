import './footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <img src="/Untitled.png" alt="Фото 1" className="footer__photo" />
                <a href="mailto:poligon-aksay@mail.ru" className="footer__email">
                    poligon-aksay@mail.ru
                </a>
                <img src="/RostovMark.webp" alt="Фото 2" className="footer__photo" />
            </div>
        </footer>
    );
}

export default Footer;