import "./carousel.css";
import Slider from "react-slick";

const sliderImages = [
  {
    id: 1,
    path: "/images/slider1.jpg",
  },
  {
    id: 2,
    path: "/images/slider2.jpg",
  },
  {
    id: 3,
    path: "/images/slider3.jpg",
  },
  {
    id: 4,
    path: "/images/slider4.jpg",
  },
  // {
  //   id: 5,
  //   path: "/images/slider5.jpg",
  // },
];

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <div>
        <Slider {...settings}>
          {sliderImages.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.path} alt="" className="slider-img" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
