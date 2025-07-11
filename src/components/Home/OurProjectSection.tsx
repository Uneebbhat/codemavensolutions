"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", once: true });

  const projectImages = [
    {
      src: "/assets/project1.png",
      alt: "ALM Traders Website",
      tags: [
        "ALMTraders",
        "Web Design",
        "Web Development",
        "NextJS",
        "ReactJS",
      ],
      link: "https://www.almtraders.org/",
      title: "ALM Traders",
    },
    {
      src: "/assets/project2.png",
      alt: "RoadPilot Business",
      tags: [
        "RoadPilot Business",
        "Web Development",
        "MERN Stack",
        "TailwindCSS",
      ],
      link: "https://roadpilotbusiness.com/",
      title: "RoadPilot Business",
    },
    {
      src: "/assets/project3.png",
      alt: "Dulche",
      tags: ["Dulche", "Web Development", "WordPress"],
      link: "https://dulche.co.uk/",
      title: "Dulche",
    },
    {
      src: "/assets/project4.png",
      alt: "Right Home",
      tags: ["Right Home", "Web Development", "WordPress"],
      link: "https://righthomedubai.com/",
      title: "Right Home",
    },
    {
      src: "/assets/project5.png",
      alt: "West Coast Waste",
      tags: [
        "West Coast Waste",
        "Web Development",
        "WordPress",
        "PHP",
        "JavaScript",
        "WordPress CMS",
      ],
      link: "https://westcoastwaste.epizy.com/",
      title: "West Coast Waste",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="our-project"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]"
        >
          <span className="text-sm font-medium uppercase">OUR PROJECT</span>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {projectImages.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project: ${project.alt}`}
                className="relative w-full h-[400px] rounded-[12px] overflow-hidden group block"
              >
                {/* Optimized Image */}
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDARUXFxwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />

                {/* Tag Overlay */}
                <div className="absolute bottom-4 left-4 bg-black-500/60 backdrop-blur-md p-[10px] rounded-lg flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-lightGray-500 px-3 py-1 rounded-full text-sm border border-white text-black-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
              <div className="mt-[5px]">
                <h6 className="text-h6 font-bold">{project.title}</h6>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProjectSection;
