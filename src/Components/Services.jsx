import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

import ServicesCard from "../Layouts/ServicesCard";

const Services = () => {
  const servicesData = [
    {
      icon: <RiMicroscopeLine size={35} className="text-backgroundColor" />,
      title: "Lab Test",
      description:
        "Book and track essential lab tests from the comfort of your home. Get reliable results and stay informed about your health status.",
    },
    {
      icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
      title: "Health Check",
      description:
        "Stay ahead with regular health check-ups and reminders. Monitor key health metrics and take timely action.",
    },
    {
      icon: <FaHeartbeat size={35} className="text-backgroundColor" />,
      title: "Heart Health",
      description:
        "Access tools and tips to maintain a healthy heart. Track vital signs, understand risk factors, and improve your lifestyle.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-center">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-center">
            We offer tools and features to help you manage your health more
            easily and confidently.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
