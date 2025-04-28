import React, { useEffect, useState } from "react";
import { slidesData } from "../utils/data";
import { SlidingButtons } from "./SlidingButtons";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const totalSlides = slidesData.length;

  const changeSlide = (direction) => {
    let newSlide;
    if (direction === "next") {
      newSlide = (currentSlide + 1) % totalSlides;
      setAnimationDirection("right");
    } else {
      newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      setAnimationDirection("left");
    }
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        changeSlide("prev");
      } else if (e.key === "ArrowRight") {
        changeSlide("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <>
      <div className="slider__wrapper">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide__container ${
              index === currentSlide ? "active" : "d-none"
            } ${
              index === currentSlide && animationDirection === "right"
                ? "slide-in-right"
                : ""
            } ${
              index === currentSlide && animationDirection === "left"
                ? "slide-in-left"
                : ""
            }`}
          >
            <div className="slide__image-container">
              <picture className="slide__image">
                <source media="(max-width: 930px)" srcSet={slide.imageMobile} />
                <img src={slide.image} alt={`slide ${index + 1} image`} />
              </picture>
            </div>
            <div className="slide__text">
              <h1 className="slide__title">{slide.title}</h1>
              <p className="slide__description">{slide.description}</p>
              <div className="slider__shopbtn">
                <a href="#">Shop now</a>
                <img src="/icon-arrow.svg" />
              </div>
            </div>

            {/* Slider Buttons for desktop*/}
          </div>
        ))}
        <SlidingButtons changeSlide={changeSlide} />
      </div>
    </>
  );
};

export default Slider;
