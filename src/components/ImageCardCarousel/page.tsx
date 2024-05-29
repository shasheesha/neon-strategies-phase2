"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './style.scss';

interface ImageCarouselProps {
  images: string[];
}

const ImageCardCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("next-test-log");
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <div className="image-carousel">
      <div className="button-container">
        {/* <button onClick={prevImage} className="moving-btn prev-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button> */}
        <button onClick={nextImage} className="moving-btn next-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>
      </div>

      <div className={`image-container`}>
      <div className="over-layer-right"></div>
      <div className="over-layer-left"></div>

        <div className={`image-slider`} style={{ transform: `translateX(-${currentIndex * 50}%)` }} >

          {images.map((src, index) => (
            <div className={`image-card`} key={index}>
              <Image priority width={810} height={540} src={src} alt={`Image ${index}`}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCardCarousel;
