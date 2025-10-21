import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ, Services, Testimonials } from "@/types/types";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function Home() {
  const services: Services[] = [
    {
      id: 1,
      title: "Web Development",
      tags: [
        "Full-stack",
        "Front-end",
        "Back-end",
        "Databases",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Responsive UI",
        "SEO-Optimized",
      ],
      images: [
        {
          src: "/assets/nextjs.png",
          alt: "NextJS",
          width: 118,
          height: 120,
        },
        {
          src: "/assets/react.png",
          alt: "ReactJS",
          width: 136,
          height: 121,
        },
      ],
    },
    {
      id: 2,
      title: "App Development",
      tags: [
        "React Native",
        "Flutter",
        "iOS & Android",
        "API Integration",
        "Push Notifications",
        "Offline Mode",
      ],
      images: [
        {
          src: "/assets/flutter.png",
          alt: "Flutter",
          width: 121,
          height: 121,
        },
        {
          src: "/assets/react-native.png",
          alt: "React Native",
          width: 112,
          height: 121,
        },
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      tags: [
        "Figma",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Brand Consistency",
      ],
      images: [
        {
          src: "/assets/figma.png",
          alt: "Figma",
          width: 81,
          height: 121,
        },
        {
          src: "/assets/xd.png",
          alt: "Adobe XD",
          width: 123,
          height: 121,
        },
      ],
    },
    {
      id: 4,
      title: "AI-Powered Solutions",
      tags: [
        "OpenAI",
        "Gemini",
        "AI Chatbots",
        "AI Integration",
        "Vercel AI SDK",
        "Automation Tools",
      ],
      images: [
        {
          src: "/assets/chatgpt.png",
          alt: "ChatGPT/OpenAI",
          width: 121,
          height: 121,
        },
        {
          src: "/assets/gemini.png",
          alt: "Google Gemini",
          width: 121,
          height: 121,
        },
      ],
    },
  ];

  const testimonials: Testimonials[] = [
    {
      id: 1,
      name: "Shahzad Malik",
      company: "ALMTraders",
      feedback:
        "Codemaven Solutions did an outstanding job revamping our online presence. They built a fast, modern, and SEO-optimized website that perfectly fits our global brand. Truly professional and result-driven.",
    },
    {
      id: 2,
      name: "Muhammad Abdullah",
      company: "Sysvelop",
      feedback:
        "Codemaven Solutions have been exceptional to work with — highly professional, efficient, and skilled. They delivered a modern, high-performing website that perfectly represents our brand and drives real results.",
    },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      faqQuestion: "How do you manage projects?",
      faqAnswer:
        "At Codemaven Solutions, we follow an agile project management approach. Each project begins with a discovery phase, followed by design, development, testing, and deployment. We maintain transparent communication through weekly progress updates, milestone reviews, and continuous feedback loops to ensure every deliverable aligns with client expectations.",
    },
    {
      id: 2,
      faqQuestion: "What technologies do you specialize in?",
      faqAnswer:
        "We specialize in modern full-stack development using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Python, Flutter, and React Native. Our team also leverages TailwindCSS, Prisma, and AI integrations to build scalable, high-performance web and mobile applications.",
    },
    {
      id: 3,
      faqQuestion: "How do you ensure quality?",
      faqAnswer:
        "Quality is embedded in our workflow. Every project undergoes rigorous code reviews, performance optimization, and end-to-end testing. We prioritize clean architecture, maintainable code, and consistent UI/UX design standards to deliver products that perform reliably at scale.",
    },
    {
      id: 4,
      faqQuestion: "What services do you offer?",
      faqAnswer:
        "Codemaven Solutions offers comprehensive digital services including UI/UX design, web development, mobile app development, and AI-powered software solutions. We cater to startups, small and medium scale businesses looking for modern, efficient, and scalable technology solutions.",
    },
    {
      id: 5,
      faqQuestion: "What scale of projects do you work on?",
      faqAnswer:
        "We primarily work with startups, small businesses, and growing teams — delivering high-quality digital products like MVPs, marketing websites, and custom web or mobile applications. Our focus is on helping emerging brands scale efficiently without the complexity of large enterprise systems.",
    },
    {
      id: 6,
      faqQuestion: "Do you offer post-launch support?",
      faqAnswer:
        "Yes, we provide ongoing maintenance, technical support, and performance monitoring after launch. Our goal is to ensure your digital product remains optimized, secure, and continuously aligned with your business growth.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <main className="py-[72px] md:py-24 px-5 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center gap-5 text-center max-w-[1450px] mx-auto text-black-500">
          <div>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-sm">
                <span>Welcome to Codemaven Solutions</span>
              </AnimatedShinyText>
            </div>
          </div>

          {/* Responsive heading */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl leading-tight">
            Your Vision Deserves Scalable Technology
          </h1>

          {/* Responsive paragraph */}
          <p className="max-w-4xl">
            We specialize in building modern web, mobile, and AI-powered
            solutions that turn ideas into measurable results.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-4 w-full">
            <Button variant="primary" className="w-full md:w-fit">
              <Link href={"https://cal.com/codemavensolutions/30min"}>
                Book a call
              </Link>
            </Button>
            {/* <Button variant="outline" className="w-full md:w-fit">
              What we do?
            </Button> */}
          </div>
        </div>
      </main>

      {/* Infinite Scrollbar Section*/}
      <section className="relative overflow-hidden bg-black-500 text-white py-8">
        <div className="flex whitespace-nowrap animate-scroll">
          <h1 className="text-[10vw] md:text-[5vw] font-heading font-bold mx-8 ">
            Smart Code. Real Impact.
          </h1>
          <h1 className="text-[10vw] md:text-[5vw] font-heading font-bold mx-8">
            Built to Last. Built for You.
          </h1>
          <h1 className="text-[10vw] md:text-[5vw] font-heading font-bold mx-8">
            Smart Code. Real Impact.
          </h1>
          <h1 className="text-[10vw] md:text-[5vw] font-heading font-bold mx-8">
            Built to Last. Built for You.
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-[72px] md:py-24 px-[20px] md:px-[60px] flex flex-col items-center justify-center">
        <div className="max-w-[1450px] mx-auto flex flex-col gap-[72px] text-black-500">
          <div className="text-center flex flex-col gap-5">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              What solutions do you need?
            </h2>
            <p>
              Tailored solutions designed to match your goals, timelines, and
              vision.
            </p>
          </div>

          {/* Services cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#F3F3F3] rounded-md flex flex-col justify-between gap-[72px]"
              >
                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold p-[22px]">
                    {service.title}
                  </h3>
                </div>

                {/* Images (Optional Section) */}
                {service.images && service.images.length > 0 && (
                  <div className="flex items-center justify-center gap-6 p-[22px]">
                    {service.images.map((image, index) => (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        key={index}
                        loading="lazy"
                        quality={75}
                      />
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 border-t border-black-500 pt-[22px]  p-[22px]">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white border border-black-500 rounded-full p-2 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-[20px] md:px-[60px]">
        <div className="flex flex-col gap-[72px] max-w-[1450px] mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold">
              Success Powered by Codemaven Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((testimonial) => (
              <figure
                className="bg-gradient-to-br from-blue-500 to-[#A4B9FF] p-1 rounded-md flex flex-col justify-between gap-2"
                key={testimonial.id}
              >
                <blockquote className="bg-white rounded-sm p-3 md:p-6 text-xl h-full">
                  <p>{`"${testimonial.feedback}"`}</p>
                </blockquote>

                <figcaption className="bg-white rounded-sm p-3 md:p-6 font-heading">
                  <p className="text-sm">
                    {testimonial.name} — {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-[20px] md:px-[60px] bg-white">
        <div className="flex flex-col items-center justify-center gap-[72px] max-w-[1450px] mx-auto">
          <div className="max-w-[800px] w-full flex flex-col gap-[72px]">
            <h2 className="text-3xl md:text-5xl font-semibold text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                  <AccordionTrigger className="font-sans font-bold">
                    {faq.faqQuestion}
                  </AccordionTrigger>
                  <AccordionContent>{faq.faqAnswer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
