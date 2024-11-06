import React from "react";
import Cards from "./Cards";
import cutting from "/cutting.jpg";
import dryer from "/dryer.jpg";
import hairdresser from "/hairdresser.jpg";
import mancutting from "/mancutting.jpg";
import mancutting2 from "/mancutting2.jpg";
import message from "/message.jpg"
import style from "/style.jpg"
import wash from "/wash.jpg"
import washing from '/washing.jpg'

const list = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "A timeless haircut for both men and women, tailored to your personal style.",
    image: cutting,
    source: "https://en.wikipedia.org/wiki/Regular_haircut"
  },
  {
    id: 2,
    name: "Blow Dryer Styling",
    description: "Achieve sleek, smooth, or voluminous hair with professional blow dryer styling.",
    image: dryer,
    source: "https://www.vega.co.in/blog/post/how-to-style-your-hair-using-hair-dryer-at-home.html"
  },
  {
    id: 3,
    name: "Men's Cut & Trim",
    description: "Expert haircut for men with detailed beard or mustache trimming services.",
    image: mancutting,
    source: "https://www.quora.com/What-is-the-difference-between-a-haircut-and-a-trim-for-men"
  },
  {
    id: 4,
    name: "Appointment Booking",
    description: "Easily book your next hair salon appointment through our message service.",
    image: message,
    source: "https://example.com/appointment-booking"
  },
  {
    id: 5,
    name: "Men's Fade Haircut",
    description: "A stylish fade haircut for men, offering a fresh and modern look.",
    image: mancutting2,
    source: "https://www.pinterest.com/pin/327496204150583095/"
  },
  {
    id: 6,
    name: "Custom Hair Styling",
    description: "Unique, personalized hairstyles created to match your special occasion or daily style.",
    image: style,
    source: "https://www.pinterest.com/mtclothiersdc/mens-hairstyles/"
  },
  {
    id: 7,
    name: "Hairdresser Consultation",
    description: "Professional consultation to determine the best style, cut, or treatment for your hair type.",
    image: hairdresser,
    source: "https://tierneysalons.com/what-is-a-hair-consultation-at-the-salon"
  },
  {
    id: 8,
    name: "Hair Wash",
    description: "Professionally washing hair with different techniques and methods.",
    image: wash,
    source: "https://en.wikipedia.org/wiki/Hair_washing"
  }
];



const Services = () => {
  return (
    <div id="service1">
      <h2 className="h2 text-center text-capitalize text-bg-light mt-5 p-2">
        We provide various services{" "}
      </h2>
      <Cards list = {list}/>
    </div>
  );
};

export default Services;
