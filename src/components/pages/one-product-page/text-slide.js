import React, { Fragment } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextSlide = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    arrows: false,
    dots: false,
    speed: 6000,
    vertical: true,
    easing: "ease",
    cssEase: "linear"
  };
  return (
    <Fragment>
      <Slider className="textSlide" {...settings}>
          <img src="https://juliaallert.com/fronts/img/icons/verticalSlide.png" alt="" />
          <img src="https://juliaallert.com/fronts/img/icons/verticalSlide.png" alt="" />
          <img src="https://juliaallert.com/fronts/img/icons/verticalSlide.png" alt="" />
      </Slider>
    </Fragment>
  );
}

export default TextSlide