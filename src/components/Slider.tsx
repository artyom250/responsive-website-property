import React, { useState } from 'react';
import "../styles/Slider.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const slides = [
    {
        img: "./hero/1.webp",
        imgNumber: "01/05",
        imgDesc: "Side Property Perspective"
    },
    {
        img: "./hero/2.webp",
        imgNumber: "02/05",
        imgDesc: "Swimming Pool & Comfy Back Yard"
    },
    {
        img: "./hero/3.webp",
        imgNumber: "03/05",
        imgDesc: "Pool & Back Yard From Back Perspective"
    },
    {
        img: "./hero/4.webp",
        imgNumber: "04/05",
        imgDesc: "Parking & Main Entrance"
    },
    {
        img: "./hero/5.webp",
        imgNumber: "05/05",
        imgDesc: "Convenient Driveway & Modern Gate"
    }
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="Slider">
            <img 
                src={slides[currentIndex].img} 
                alt="image" 
            />
            <div className="arrows">
                <button onClick={goToPreviousSlide}>
                    <i><BiLeftArrowAlt /></i>
                </button>
                <button onClick={goToNextSlide}>
                    <i><BiRightArrowAlt /></i>
                </button>
            </div>
            <div className="number">
                <div className="numberFlex">
                    <p className='imgNumber'>{slides[currentIndex].imgNumber}</p>
                    <div className="bullets">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`bullet ${index === currentIndex ? 'white' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                    <p className="imgDesc">{slides[currentIndex].imgDesc}</p>
                </div>
            </div>
        </div>
    );
}

export default Slider;