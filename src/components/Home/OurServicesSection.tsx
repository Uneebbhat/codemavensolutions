"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", once: true });

  const services = [
    {
      title: "UI/UX Design",
      description: `A great product isn't just about functionality—it's about
              how it feels. At Codemaven Solutions, we design user interfaces
              that are not only visually stunning but also intuitive and
              user-friendly. Our UI/UX design process focuses on creating
              seamless interactions that enhance user engagement and elevate
              your brand's digital presence.`,
      tags: [
        "User Research & Wireframing",
        "Modern & Aesthetic UI Design",
        "Prototyping",
      ],
    },
    {
      title: "Web Development",
      description: `In today's fast-paced digital world, your website is more than just an online presence—it's the foundation of your brand. At Codemaven Solutions, we develop modern, scalable, and high-performing websites tailored to your business needs.`,
      tags: [
        "Custom Website Development",
        "Fast & Scalable Web Apps",
        "Responsive & Mobile-Friendly Design",
        "SEO & Performance Optimization",
      ],
    },
    {
      title: "App Development",
      description: `In a mobile-first world, having a high-performing app is crucial for success. At Codemaven Solutions, we build intuitive, fast, and scalable mobile applications that enhance user engagement and drive business growth.`,
      tags: [
        "Custom Mobile App Development",
        "Cross-Platform & Native Solutions",
        "Scalable & Secure Architecture",
        "UI/UX Optimized Experiences",
      ],
    },
    {
      title: "AI Chatbots",
      description: `Harness the power of conversational AI to automate workflows, support, and engagement. We build intelligent chatbots tailored to your use-case, helping you provide 24/7 customer support and streamline business operations through smart automation.`,
      tags: [
        "GPT Integration & Custom AI",
        "WhatsApp & Web Chatbots",
        "Third-Party Integrations",
      ],
    },
    {
      title: "Custom Software Development",
      description: `Unique businesses need unique solutions. We craft bespoke software applications optimized for performance, reliability, and growth. Our custom solutions are designed to solve your specific challenges and scale with your business needs.`,
      tags: [
        "Business Process Automation",
        "CRM & ERP Systems",
        "Secure Backend Architecture",
        "Third-Party Integrations",
      ],
    },
    // {
    //   title: "Consultation",
    //   description: `Navigating the digital landscape can be challenging. At Codemaven Solutions, we provide expert consultation to help businesses strategize, optimize, and execute their digital transformation effectively. Whether you're a startup or an enterprise, our tailored guidance ensures you make informed decisions.`,
    //   tags: [
    //     "Technical Strategy & Roadmapping",
    //     "Code & Architecture Review",
    //     "Business Digital Transformation",
    //     "Scalability & Performance Optimization",
    //   ],
    // },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="our-services"
    >
      <div className="container mx-auto">
        {/* About Us Label */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]"
        >
          <span className="text-sm font-medium uppercase">OUR SERVICES</span>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-[12px] gap-[20px]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-h4 md:text-h2 font-medium leading-[37px] md:leading-[58px]">
              Your One-Stop Tech
              <br className="hidden md:block" />
              Partner for Exceptional Digital Solutions
            </h2>
            <p className="text-bodyLarge font-regular my-[20px] leading-[24px]">
              We turn bold ideas into reality with cutting-edge technology and
              seamless user experiences. From concept to execution, we help
              businesses thrive in the digital world.
            </p>
            <hr className="border-black-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="w-full md:w-1/2"
          >
            <div className="flex flex-col gap-[20px]">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                >
                  <h4 className="text-h4 font-medium">{service.title}</h4>
                  <p className="text-bodyLarge font-regular my-[20px] leading-[24px]">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] text-lightGray-900">
                    {service.tags.map((tag, i) => (
                      <p
                        key={i}
                        className="text-lightGray-900 flex items-baseline gap-[5px]"
                      >
                        <Image
                          src="/assets/arrow.svg"
                          alt="arrow"
                          width={16}
                          height={16}
                        />
                        {tag}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServicesSection;
