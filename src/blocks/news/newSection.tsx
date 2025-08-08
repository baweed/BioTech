import { newsData } from "./newData";
import './newsSection.css';
import { useState } from "react";

export function NewsSection(){
    const [showAll, setShowAll] = useState(false);
    return (
        <section id='news' className="news-section">
            <h2 className="news-section__title">Новости</h2>
            <ul className="news-section__list">
                {newsData.slice(0, showAll ? newsData.length : 3).map((news, i) => (
                    <li className="news-section__item" key={i}>
                        <h3 className="news-section__item-title">{news.title}</h3>
                        <p className="news-section__item-description">{news.description}</p>
                    </li>
                ))}
                {newsData.length > 3 && (
                    <li className="news-section__item news-section__item--toggle" key="toggle">
                        <button
                            className="news-section__toggle-btn"
                            onClick={() => setShowAll((prev) => !prev)}
                            aria-expanded={showAll}
                        >
                            {showAll ? '▲  Скрыть' : '▼  Показать ещё'}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default NewsSection;