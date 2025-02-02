"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const TechStackSlider = () => {
  const images = [
    { src: "/assets/next.svg", alt: "Next.js", size: 60 },
    { src: "/assets/react.svg", alt: "React", size: 60 },
    { src: "/assets/react-native.svg", alt: "React Native", size: 70 },
    { src: "/assets/flutter.svg", alt: "Flutter", size: 60 },
    { src: "/assets/express.svg", alt: "Express", size: 90 },
    { src: "/assets/javascript.svg", alt: "JavaScript", size: 60 },
    { src: "/assets/typescript.svg", alt: "TypeScript", size: 60 },
    { src: "/assets/tailwind.svg", alt: "Tailwind CSS", size: 90 },
    { src: "/assets/shadcn.svg", alt: "Shadcn UI", size: 60 },
    { src: "/assets/mongodb.svg", alt: "MongoDB", size: 90 },
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
    <section className="bg-white rounded-[20px] mt-[12px] p-[20px] overflow-hidden">
      <div className="relative">
        <div
          className="flex gap-[40px]"
          style={{
            transform: `translateX(${position}px)`,
            width: `${totalWidth * 2}px`,
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.size}
                height={image.size}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
