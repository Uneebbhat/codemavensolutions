// src/components/common/HireUsOnUpworkSection.tsx
"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 13l2 2 3-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Secure Payments",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 3v4M8 3v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Verified Contracts",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 17a5 5 0 100-10 5 5 0 000 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Peace of Mind",
  },
];

const HireUsOnUpworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="hire-upwork"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px] flex items-center gap-2"
        >
          <Image
            src="/assets/upwork-black.png"
            alt="UpWork"
            width={22}
            height={22}
          />
          <span className="text-sm font-medium uppercase">
            HIRE US ON UPWORK
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-[12px] gap-[20px]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-h4 md:text-h2 font-medium leading-[37px] md:leading-[58px]">
              Prefer working through a trusted platform?
              <br className="hidden md:block" />
              You can hire our team securely via UpWork.
            </h2>
            <p className="text-bodyLarge font-regular my-[20px] leading-[24px]">
              Our UpWork agency profile is new, but our commitment to quality
              and professionalism is proven. Enjoy secure payments, verified
              contracts, and peace of mind when you work with us through UpWork.
            </p>
            <a
              href="https://www.upwork.com/agencies/1922683295603770631/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 transform hover:scale-105"
            >
              <Image
                src="/assets/upwork.png"
                alt="UpWork"
                width={22}
                height={22}
                className="object-contain"
              />
              Hire Us on UpWork
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="w-full md:w-1/2 flex flex-col gap-[20px] justify-center"
          >
            <div className="flex flex-col gap-[10px]">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 bg-lightGray-500 rounded-[12px] p-4"
                >
                  <span className="bg-green-50 rounded-full p-2">{f.icon}</span>
                  <span className="text-lg text-gray-700 font-medium text-center">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HireUsOnUpworkSection;
