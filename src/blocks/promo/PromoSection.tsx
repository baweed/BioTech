import './PromoSection.css';

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-background"></div>
      <div className="promo-content">
        <h1 className="promo-title">ООО "Полигон-Аксай"</h1>
        <p className="promo-description">
          Оказываем услуги по размещению отходов 4 и 5 класса опасности, 
          утилизации отходов 5 класса опасности
        </p>
      </div>
    </section>
  );
}

export default PromoSection;