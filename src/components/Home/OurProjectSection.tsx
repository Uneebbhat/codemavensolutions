import Link from "next/link";
import Image from "next/image";
import React from "react";

const OurProjectSection = () => {
  const projectImages = [
    {
      src: "/assets/project1.png",
      alt: "ALM Traders Website",
      tags: ["ALMTraders", "Web Design", "Web Development"],
      link: "https://www.almtraders.org/",
    },
  ];

  return (
    <section
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="our-project"
    >
      {/* Section Header */}
      <div className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]">
        <span className="text-sm font-medium uppercase">OUR PROJECT</span>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {projectImages.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${project.alt}`}
            className="relative w-full h-[400px] rounded-[12px] overflow-hidden group"
          >
            {/* Optimized Image */}
            <Image
              src={project.src}
              alt={project.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              // priority={index === 0}
              loading="lazy"
              quality={75} // Reduced quality for better performance
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDARUXFxwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" // Base64 blurred placeholder
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
        ))}
      </div>
    </section>
  );
};

export default OurProjectSection;
