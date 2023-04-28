import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/150"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Brand 1</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Brand 2</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;