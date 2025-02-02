import React from "react";

const OurProcessSection = () => {
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
    <>
      <section className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]">
        <div className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]">
          <span className="text-sm font-medium uppercase">OUR PROCESS</span>
        </div>

        <div>
          <div className="w-full md:w-1/2">
            <h2 className="text-h4 md:text-h2 font-medium">
              Turning Ideas into Reality, Effortlessly
            </h2>

            <p className="text-sm md:text-bodyLarge font-regular my-[20px]">
              We follow a streamlined 3-step approach to transform your vision
              into a fully functional digital product.
            </p>
            <hr className="border-black-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[50px]">
            {process.map((pro) => (
              <div
                key={pro.id}
                className="bg-lightGray-500 rounded-[8px] p-[20px] relative h-[300px] md:h-[466px] w-full max-w-full"
              >
                <h1
                  className="text-[250px] md:text-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent font-bold opacity-100 md:opacity-100"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {pro.id}
                </h1>
                <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                  <h5 className="text-xl md:text-h5 font-medium">
                    {pro.title}
                  </h5>
                  <p className="text-sm md:text-bodyLarge font-regular my-[10px] md:my-[20px]">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcessSection;
