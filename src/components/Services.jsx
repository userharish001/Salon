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
    image: cutting
  },
  {
    id: 2,
    name: "Blow Dryer Styling",
    description: "Achieve sleek, smooth, or voluminous hair with professional blow dryer styling.",
    image: dryer
  },
  {
    id: 3,
    name: "Men's Cut & Trim",
    description: "Expert haircut for men with detailed beard or mustache trimming services.",
    image: mancutting
  },
  {
    id: 4,
    name: "Appointment Booking",
    description: "Easily book your next hair salon appointment through our message service.",
    image: message
  },
  {
    id: 5,
    name: "Men's Fade Haircut",
    description: "A stylish fade haircut for men, offering a fresh and modern look.",
    image: mancutting2
  },
  {
    id: 6,
    name: "Custom Hair Styling",
    description: "Unique, personalized hairstyles created to match your special occasion or daily style.",
    image: style
  },
  {
    id: 7,
    name: "Hairdresser Consultation",
    description: "Professional consultation to determine the best style, cut, or treatment for your hair type.",
    image: hairdresser
  },
  {
    id:8,
    name:"Hair Wash",
    description:"Porfessionally Washing hair with different different techniques and methods",
    image:wash
  }
];


const Services = () => {
  return (
    <div>
      <h2 className="h2 text-center text-capitalize text-bg-light mt-5 p-2">
        We provide various services{" "}
      </h2>
      <Cards list = {list}/>
    </div>
  );
};

export default Services;
