import React from "react";
import "../styles/Home.css";

import Carousel from "react-bootstrap/Carousel";
import food from "../assets/img/food.jpg";
import dinner from "../assets/img/dinner.jpg";
import { FormattedMessage } from "react-intl";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import chef from "../assets/img/chef.jpg";
import food2 from "../assets/img/local-food.jpg";
import customer from "../assets/img/customer.jpg";

const Home = () => {
  return (
    <div className="home">
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

      <Container>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={chef} />
            <Card.Body>
              <Card.Title>
                <FormattedMessage id="home.card1.title" />
              </Card.Title>
              <Card.Text>
                <FormattedMessage id="home.card1.text" />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">
                <FormattedMessage id="home.card.footer" />
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={food2} />
            <Card.Body>
              <Card.Title>
                <FormattedMessage id="home.card2.title" />
              </Card.Title>
              <Card.Text>
                <FormattedMessage id="home.card2.text" />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">
                <FormattedMessage id="home.card.footer" />
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={customer} />
            <Card.Body>
              <Card.Title>
                <FormattedMessage id="home.card3.title" />
              </Card.Title>
              <Card.Text>
                <FormattedMessage id="home.card3.text" />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">
                <FormattedMessage id="home.card.footer" />
              </Card.Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Home;
