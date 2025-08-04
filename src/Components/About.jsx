import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          Welcome to HealthPlus – a simple, reliable platform built to support
          your everyday health needs. Whether you're managing daily medications,
          looking for wellness tips, or just trying to stay organized, our app
          is here to make things easier.
        </p>
        <p className="text-justify lg:text-start">
          We believe that taking care of your health shouldn't be complicated.
          That’s why we’ve designed a clean, user-friendly interface that works
          for individuals and families alike. Our goal is to empower you to make
          informed health choices and stay on top of your well-being—all in one
          convenient place..
        </p>
        <p className="text-justify lg:text-start">
          HealthPlus combines essential tools with helpful insights, so you can
          focus on living a healthier, happier life. No clutter, no
          confusion—just what you need, when you need it.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
