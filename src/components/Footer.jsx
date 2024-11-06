import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-3">
        <div class="box">
          <div class="logo">Hair Salon</div>
          <div class="bf-text">We beleive in quality not quantity </div>
          <p class="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ipsam sit magni et consequatur, tenetur ab doloremque totam
            necessitatibus inventore optio qui? Inventore vel quibusdam
            exercitationem, nulla asperiores fugiat totam!
          </p>

          <div class="bf-text">Subscribe For Offers</div>

          <div class="subscribe">
            <input type="text" name="" id="" />
            <button class="btn">subscribe</button>
          </div>
        </div>

        <div class="box">
          <div class="bf-text">Quick Links</div>
          <ListGroup>
            <ListGroupItem>
              <Link to="/">Home</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/about">About</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/services">Services</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/contact">Contact</Link>
            </ListGroupItem>
          </ListGroup>

          <div className="bf-text">Follow Us</div>
          <div className="icons">
            <Link to="https://www.facebook.com" className="fa-brands fa-facebook-f text-decoration-none"></Link>
            <Link to="https://www.google.com" className="fa-brands fa-google text-decoration-none"></Link>
            <Link to="https://www.instagram.com" className="fa-brands fa-instagram text-decoration-none"></Link>
            <Link to="https://www.youtube.com" className="fa-brands fa-youtube text-decoration-none"></Link>
          </div>
        </div>

        <div class="box">
          <div class="bf-text">Say Hi! </div>
          <ul class="SayHi">
            <li>
              <a href="./index.html">info@example.com</a>
            </li>
            <li>
              <a href="./about.html">contact@example.com</a>
            </li>
          </ul>

          <div class="bf-text">Call Us</div>
          <ul class="SayHi">
            <li>Phone :+1 2334325532</li>
            <li>Toll Free:+1 2334325532</li>
          </ul>

          <div class="bf-text">Find Us</div>

          <div class="address">123 Fifth Avenue, Opp Hut, New York, USA</div>
        </div>
      </div>
      <footer className="text-bg-dark text-center p-3">
        <div class="fbox">Copyright &copy; 2024 Unisex Hair Salon</div>
        <div class="fbox">Powered By Web Developer</div>
      </footer>
    </>
  );
};

export default Footer;
