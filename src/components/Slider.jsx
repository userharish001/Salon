import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import poster1 from "/poster1.jpg";
import poster2 from "/poster2.jpg";
import poster3 from "/poster3.jpg";
import poster4 from "/poster4.jpg";
import poster5 from "/poster5.jpg";
import poster6 from "/poster6.jpg";
import poster7 from "/poster7.jpg";
import poster8 from "/poster8.jpg";

const Slider = () => {
  return (
    <div className="d-flex justify-content-around align-items-center">
    <div>
      <p className="p-3 bg-body-secondary m-3">
        We have exciting offers to attract customers
      </p>
    </div>
    <div style={{ flexBasis: '60%' }}> {/* Set the width of the carousel */}
      <Carousel>
        <Carousel.Item>
          <Image src={poster1} text="First slide" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <Image src={poster2} text="Second slide" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <Image src={poster3} text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  </div>
  
  );
};

export default Slider;
