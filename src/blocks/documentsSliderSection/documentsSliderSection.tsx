import './documentsSlideSection.css'
import { useState } from 'react';
import useSwipe from './slider';

const images = [
    './Documents/document_1.jpg',
    './Documents/document_2.png',
    './Documents/document_3.png',
    './Documents/document_4.png',
    './Documents/document_5.png',
    './Documents/document_6.png',
];


const DocumentsSliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const { onTouchStart, onTouchEnd } = useSwipe(nextImage, prevImage);

    return (
        <div id='docs' className="documents-slider-section">
            <h2>Документы</h2>
            <div className="documents-slider">
                <button className="slider-switch" onClick={prevImage}>
                    &lt;&lt;
                </button>
                <div
                    className="slider-image-wrapper"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <img
                        key={images[currentIndex]}
                        src={images[currentIndex]}
                        alt={`Document ${currentIndex + 1}`}
                        className="slider-image"
                    />
                </div>
                <button className="slider-switch" onClick={nextImage}>
                    &gt;&gt;
                </button>
            </div>
            <div className="slider-pagination">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={idx === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(idx)}
                    >
                        {idx + 1}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default DocumentsSliderSection;

