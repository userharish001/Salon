import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import barber from "../../src/assets/barber.jpg";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer"

const Home = () => {
  return (
   <div>
     <div className="p-1 m-3">
      {/* Hero Section */}
      <div className="mt-5 rounded-3"
        style={{
          backgroundImage: `url(${barber})`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <h1 className="text-center">Welcome to Newon Unisex Hair Salon</h1>
        <p className="text-center">Your beauty, our passion.</p>
       <div className="text-center mt-3">
       <Button variant="primary" href="#service1">
          Explore Our Services
        </Button>
       </div>
      </div>

      {/* Introduction Section */}
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">About Us</h2>
            <p className="text-center">
              At Newon Unisex Hair Salon, we believe that beauty is for
              everyone. With over 8 years of experience, our team is dedicated
              to providing exceptional hair and beauty services tailored to each
              individual. Whether you're looking for a trendy haircut, vibrant
              color, or a soothing treatment, we’re here to help you look and
              feel your best.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="mt-5">
        <h2 className="text-center">Our Services</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Haircuts & Styling</Card.Title>
                <Card.Text>
                  Classic cuts, modern styles, and everything in between.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Hair Color & Highlights</Card.Title>
                <Card.Text>
                  Transform your look with vibrant colors and stunning
                  highlights.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Keratin Treatments</Card.Title>
                <Card.Text>
                  Enjoy smooth, frizz-free hair with our keratin treatments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Special Occasion Hairstyles</Card.Title>
                <Card.Text>
                  Get ready for your special day with our stunning hairstyles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Manicures & Pedicures</Card.Title>
                <Card.Text>
                  Pamper yourself with our nail care services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Skin Care & Facials</Card.Title>
                <Card.Text>
                  Rejuvenate your skin with our specialized facials.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="mt-5">
        <h2 className="text-center">What Our Clients Say</h2>
        <Row>
          <Col md={4} className="text-center">
            <blockquote>
              <p>
                "I always leave feeling like a million bucks! The team is
                fantastic."
              </p>
              <footer>- Sarah J.</footer>
            </blockquote>
          </Col>
          <Col md={4} className="text-center">
            <blockquote>
              <p>"Best salon experience ever! Highly recommend."</p>
              <footer>- Mark T.</footer>
            </blockquote>
          </Col>
          <Col md={4} className="text-center">
            <blockquote>
              <p>"They really understand what I want and make it happen!"</p>
              <footer>- Emma L.</footer>
            </blockquote>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="text-center my-5">
        <h2>Ready to Transform Your Look?</h2>
        <Button variant="primary" href="/contact">
          Book Your Appointment
        </Button>
      </div>
    </div>
      <About/>
      <Services/>
      <Footer/>
   </div>
  );
};

export default Home;
