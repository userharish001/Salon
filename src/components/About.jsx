import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="mt-5">
      <h1 className="text-center text-bg-dark p-3">Welcome to Newon Unisex Hair Salon</h1>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="text-bg-light">
            <Card.Body>
              <Card.Title className="text-center">About Me</Card.Title>
              <Card.Text>
                I’m Jack, the proud owner and lead stylist of Newon Unisex Salon, located in the heart of Rohtak. With over 8 years of experience in the beauty and hair industry, my passion is helping clients feel their absolute best, whether it's through a fresh haircut, stunning hair color, or an indulgent beauty treatment.
              </Card.Text>
              <Card.Text>
                At this Salon, we believe that beauty is about more than just appearances—it's about confidence. That's why we focus on creating a welcoming environment where every client feels relaxed, pampered, and appreciated. From the moment you step through our doors, you're more than just a client—you’re part of our family.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center text-bg-success p-2">Why Choose Us?</h2>
      <ListGroup>
        <ListGroup.Item>
          <strong>Experienced Professionals:</strong> Our team consists of highly trained stylists, colorists, and beauty experts with a deep love for the art of transformation.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Personalized Service:</strong> We take the time to understand your individual style, preferences, and needs, so every visit is tailored to you.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Top-Quality Products:</strong> We only use the best, salon-quality products to ensure your hair and skin receive the care they deserve.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>A Relaxing Atmosphere:</strong> Whether you're here for a quick trim or a complete makeover, our salon is designed to be a sanctuary from your daily routine.
        </ListGroup.Item>
      </ListGroup>

      <Row className="my-4">
        <Col md={12}>
          <h3 className="text-center">My Journey</h3>
          <p className="text-center">
            Ever since I was young, I had a fascination with the beauty industry. After completing my training and gaining experience in top salons, I decided to create a space where I could share my passion and creativity with others. Over the years, I’ve had the privilege of working with amazing clients, creating beautiful transformations that leave them feeling empowered.
          </p>
        </Col>
      </Row>

      <h3 className="text-center">Our Services</h3>
      <ListGroup style={{ textShadow: "1px 1px", backgroundColor: "ButtonHighlight" }}>
        <ListGroup.Item>Haircuts & Styling</ListGroup.Item>
        <ListGroup.Item>Hair Color & Highlights</ListGroup.Item>
        <ListGroup.Item>Keratin Treatments</ListGroup.Item>
        <ListGroup.Item>Special Occasion Hairstyles</ListGroup.Item>
        <ListGroup.Item>Manicures & Pedicures</ListGroup.Item>
        <ListGroup.Item>Skin Care & Facials</ListGroup.Item>
      </ListGroup>

      <Row className="my-4">
        <Col md={12} className="text-center">
          <h2>Come Visit Us!</h2>
          <p>We’d love to meet you and help you look and feel fabulous. Book your appointment today, and let’s create something beautiful together.</p>
          <Button variant="primary">Book Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
