"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TechStackSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const images = [
    { src: "/assets/next.svg", alt: "Next.js", size: 80 },
    { src: "/assets/react.svg", alt: "React", size: 60 },
    { src: "/assets/react-native.svg", alt: "React Native", size: 90 },
    { src: "/assets/flutter.svg", alt: "Flutter", size: 60 },
    { src: "/assets/express.svg", alt: "Express", size: 120 },
    { src: "/assets/javascript.svg", alt: "JavaScript", size: 60 },
    { src: "/assets/typescript.svg", alt: "TypeScript", size: 60 },
    { src: "/assets/tailwind.svg", alt: "Tailwind CSS", size: 90 },
    { src: "/assets/shadcn.svg", alt: "Shadcn UI", size: 40 },
    { src: "/assets/mongodb.svg", alt: "MongoDB", size: 120 },
    { src: "/assets/figma.svg", alt: "Figma", size: 40 },
    { src: "/assets/illustrator.png", alt: "Illustrator", size: 60 },
    { src: "/assets/photoshop.png", alt: "Photoshop", size: 60 },
  ];

  const [position, setPosition] = useState(0);
  const itemWidth = 140; // Width of each item including gap
  const totalWidth = images.length * itemWidth;

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    };

    const animationFrame = requestAnimationFrame(function callback() {
      animate();
      requestAnimationFrame(callback);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [totalWidth]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-[20px] mt-[12px] p-[20px] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div
          className="flex gap-[40px]"
          style={{
            transform: `translateX(${position}px)`,
            width: `${totalWidth * 2}px`,
          }}
        >
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.size}
                height={image.size}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TechStackSlider;
