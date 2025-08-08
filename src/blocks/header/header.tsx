
import { useState } from 'react';
import './Header.css';
type MenuAnchor = {
    label: string;
    anchor: string;
};

const menuAnchors: MenuAnchor[] = [
    { label: 'ООО "ПОЛИГОН-АКСАЙ"', anchor: 'main' },
    { label: 'О нас', anchor: 'about' },
    { label: 'Партнёрство', anchor: 'partnership' },
    { label: 'Новости', anchor: 'news' },
    { label: 'Документы', anchor: 'docs' },
    { label: 'Наши инновации', anchor: 'innovations' },
    { label: 'Контакты', anchor: 'contacts' }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const handleMenuClick = (anchor: string) => {
        setIsMenuOpen(false);
        const el = document.getElementById(anchor);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <header className="header-wrapper">
                <div className="header-container">
                    <div className="logo left-logo">
                        <img src='/Untitled.png' alt="Placeholder" width={'170px'} height={'170px'} />
                    </div>

                    <div className="content-block">
                        <div className="image-text-block">
                            <img src='/headerMark.webp' alt="Placeholder" />
                            <p>Ростовская область, Аксайский р-н, ЗАО "Агрофирма Аксайский" поле №1</p>
                        </div>
                        <div className="image-text-block">
                            <img src='/headerMark_2.webp' alt="Placeholder" />
                            <p>Ростовская область, г. Аксай, ул. Менделеева, д.53, оф. 24,25</p>
                        </div>
                    </div>

                    <div className="logo right-logo">
                        <img src='/RostovMark.webp' alt="Placeholder" />
                    </div>
                </div>
            </header>
            <nav className="header-menu">
                <div className="menu-container">
                    {/* Бургер-иконка (появляется только на мобильных) */}
                    <div className="burger-icon" onClick={toggleMenu}>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    </div>

                    <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
                        {menuAnchors.map((item, index) => (
                            <li
                                key={index}
                                className={`menu-item ${index === 0 ? 'active' : ''}`}
                                onClick={() => handleMenuClick(item.anchor)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;