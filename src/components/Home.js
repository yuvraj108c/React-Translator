import React from "react";
import "../styles/Home.css";

import Carousel from "react-bootstrap/Carousel";
import food from "../assets/img/food.jpg";
import dinner from "../assets/img/dinner.jpg";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <img className="d-block w-100" src={food} alt="First slide" />
        </div>
        <Carousel.Caption>
          <h1>
            <FormattedMessage id="carousel.image1.title" />
          </h1>
          <p>
            <FormattedMessage id="carousel.image1.description" />
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dinner} alt="Third slide" />

        <Carousel.Caption>
          <h1>
            <FormattedMessage id="carousel.image2.title" />
          </h1>
          <p>
            <FormattedMessage id="carousel.image2.description" />
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
