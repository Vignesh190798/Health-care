import React from "react";
import Button from "../Layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life...
        </h1>
        <p>
          Take control of your well-being with trusted health resources,
          personalized tools, and expert support—because a vibrant life begins
          with informed choices.
        </p>
      </div>
    </div>
  );
};

export default Home;
