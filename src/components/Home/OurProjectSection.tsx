import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProjectSection = () => {
  const projectImages = [
    {
      src: "/assets/project1.png",
      alt: "AlmTraders",
      tags: ["ALMTraders", "Web Design", "Web Development"],
      link: "https://www.almtraders.org/",
    },
  ];
  return (
    <>
      <section className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]">
        <div className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]">
          <span className="text-sm font-medium uppercase">OUR PROJECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {projectImages.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="w-full h-[400px] bg-cover bg-center bg-no-repeat p-[20px]"
              style={{ backgroundImage: `url(${project.src})` }}
            >
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-lightGray-500 p-[10px] rounded-full text-sm border border-black-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProjectSection;
