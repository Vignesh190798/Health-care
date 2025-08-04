import React from "react";

import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

import BlogCard from "../Layouts/BlogCard";

const blogData = [
  {
    img: img1,
    headlines: "Unraveling the Mysteries of Sleep",
    description: "Learn how sleep affects your health and how to improve your sleep quality.",
  },
  {
    img: img2,
    headlines: "The Heart-Healthy Diet",
    description: "Explore foods that boost heart health and support a balanced lifestyle.",
  },
  {
    img: img3,
    headlines: "Understanding Pediatric Vaccinations",
    description: "A quick guide to childhood vaccines and their importance.",
  },
  {
    img: img4,
    headlines: "Navigating Mental Health",
    description: "Simple ways to manage stress, anxiety, and emotional well-being.",
  },
  {
    img: img5,
    headlines: "The Importance of Regular Exercise",
    description: "Discover how staying active benefits your body and mind.",
  },
  {
    img: img6,
    headlines: "Skin Health 101",
    description: "Tips for keeping your skin healthy, clear, and protected.",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-center">
            Latest Post
          </h1>
          <p className="mt-2 text-center">
            Explore our latest health articles and expert tips designed to help
            you live better every day.
          </p>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              img={post.img}
              headlines={post.headlines}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
