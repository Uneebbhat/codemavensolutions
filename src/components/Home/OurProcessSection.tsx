"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", once: true });

  const process = [
    {
      id: 1,
      title: "Understanding Your Vision",
      description:
        "We dive deep into your goals, audience, and requirements to lay a strong foundation for your project.",
      tags: ["Vision Exploration", "Strategic Foundation", "Goal Alignment"],
    },
    {
      id: 2,
      title: "Crafting Stunning Experiences",
      description:
        "Our UI/UX experts create visually engaging and user-friendly designs that bring your concept to life.",
      tags: ["Design And Refine", "UI/UX Magic", "Engaging Experiences"],
    },
    {
      id: 3,
      title: "Bringing Ideas to Action",
      description:
        "We turn designs into high-performance, scalable, and secure digital solutions ready to make an impact.",
      tags: [
        "Develop And Deliver",
        "High Performance Code",
        "Scalable Solutions",
      ],
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]"
      >
        <span className="text-sm font-medium uppercase">OUR PROCESS</span>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-h4 md:text-h2 font-medium leading-[37px] md:leading-[58px]">
            Turning Ideas into Reality, Effortlessly
          </h2>

          <p className="text-sm md:text-bodyLarge font-regular my-[20px] leading-[24px]">
            We follow a streamlined 3-step approach to transform your vision
            into a fully functional digital product.
          </p>
          <hr className="border-black-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[50px]">
          {process.map((pro, index) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="bg-lightGray-500 rounded-[8px] p-[20px] relative h-[400px] md:h-[466px] w-full max-w-full"
            >
              <h1
                className="text-[250px] md:text-[250px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent font-bold opacity-100 md:opacity-100"
                style={{ WebkitTextStroke: "2px black" }}
              >
                {pro.id}
              </h1>
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <h5 className="text-xl md:text-h5 font-medium">{pro.title}</h5>
                <p className="text-sm md:text-bodyLarge font-regular my-[10px] md:my-[20px] leading-[24px]">
                  {pro.description}
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  {pro.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="text-xs md:text-sm bg-white border border-black-500 p-[8px] md:p-[10px] rounded-full"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProcessSection;
