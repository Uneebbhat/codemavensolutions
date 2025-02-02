import Image from "next/image";
import React from "react";

const OurServicesSection = () => {
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
  ];
  return (
    <section
      className="text-black-500 p-[20px] bg-white rounded-[20px] mt-[12px]"
      id="our-services"
    >
      {/* About Us Label */}
      <div className="mb-4 bg-lightGray-500 rounded-[8px] p-[20px]">
        <span className="text-sm font-medium uppercase">OUR SERVICES</span>
      </div>

      <div className="flex flex-col md:flex-row mt-[12px] gap-[20px]">
        <div className="w-full md:w-1/2">
          <h2 className="text-h4 md:text-h2 font-medium">
            Your One-Stop Tech
            <br className="hidden md:block" />
            Partner for Exceptional Digital Solutions
          </h2>
          <p className="text-bodyLarge font-regular my-[20px]">
            We turn bold ideas into reality with cutting-edge technology and
            seamless user experiences. From concept to execution, we help
            businesses thrive in the digital world.
          </p>
          <hr className="border-black-500" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-[20px]">
            {services.map((service, i) => (
              <div key={i}>
                <h4 className="text-h4 font-medium">{service.title}</h4>
                <p className="text-bodyLarge font-regular my-[20px]">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
