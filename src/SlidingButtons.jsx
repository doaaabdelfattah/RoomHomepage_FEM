import React from "react";

export const SlidingButtons = ({ changeSlide }) => {
  return (
    <div className="slider__btns">
      <button
        id="left-btn"
        onClick={() => changeSlide("prev")}
        className="left-btn"
        type="button"
      >
        <img src="/icon-angle-left.svg" alt="left button" />
      </button>

      <button
        id="right-btn"
        onClick={() => changeSlide("next")}
        className="right-btn"
        type="button"
      >
        <img src="/icon-angle-right.svg" alt="right button" />
      </button>
    </div>
  );
};
