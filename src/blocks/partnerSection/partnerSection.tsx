import './partnerSection.css';

export function PartnerSection() {
    return (
        <section id='partnership'className="partner-section">
            <h2 className="partner-section__title">Наши партнеры</h2>
            <p>Мы сотрудничаем с ведущими организациями, чтобы предоставить вам лучшие услуги.</p>
            <ul className="partner-section__list">
                {Array.from({ length: 17 }, (_, i) => (
                    <li className="partner-section__item" key={i + 1}>
                        <img
                            className="partner-section__logo"
                            src={`./Partners/partners${i + 1}.webp`}
                            alt={`Partner ${i + 1}`}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PartnerSection;