"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="about-us"
    >
      {/* About Us Label */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]"
      >
        <span className="text-sm font-medium uppercase">ABOUT US</span>
      </motion.div>

      <div className="flex flex-col mt-[12px]">
        {/* Header Section - Left Side */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-h4 leading-[37px] md:text-h2 font-medium mb-[20px] md:leading-[58px]">
            Innovating the Digital <br className="hidden md:block" />
            World with Purpose
          </h2>
          <hr className="border-black-500" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full md:w-[60%] md:ml-auto mt-[40px] md:mt-[136px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="space-y-4"
            >
              <h2 className="text-lg md:text-xl font-medium">
                A Tech Company Built for Impact
              </h2>
              <p className="text-gray-600 leading-[22px] text-sm md:text-base">
                Codemaven Solutions was founded with a vision to redefine the
                digital landscape. We are a team of passionate problem-solvers,
                designers, and developers dedicated to crafting seamless digital
                experiences that drive real-world results. Our mission is to
                empower businesses with technology that enhances engagement,
                streamlines operations, and accelerates growth.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="space-y-4"
            >
              <h2 className="text-lg md:text-xl font-medium">
                Commitment, Creativity & Excellence
              </h2>
              <p className="text-gray-600 leading-[22px] text-sm md:text-base">
                At Codemaven Solutions, we believe technology is more than just
                code—it&apos;s about creating intuitive experiences that leave a
                lasting impact. Our approach blends innovation with
                functionality, ensuring every solution we build is not only
                visually stunning but also highly efficient. From concept to
                execution, we are committed to delivering excellence every step
                of the way.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
