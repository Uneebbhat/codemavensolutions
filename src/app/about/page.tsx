import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function AboutPage() {
  const projectImages = [
    {
      src: "/assets/old/project1.png",
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
      src: "/assets/sysvelop.png",
      alt: "Sysvelop Website",
      tags: [
        "Sysvelop",
        "Web Development",
        "MERN Stack",
        "NextJS",
        "TailwindCSS",
      ],
      link: "https://www.sysvelop.com/",
      title: "Sysvelop",
    },
  ];
  return (
    <>
      <section className="py-[72px] md:py-24 px-5 md:px-[60px]">
        <div className="max-w-[1450px] mx-auto">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              We are a team of passionate engineers, designers, and innovators
              turning ideas into high-performing digital products — built to
              inspire, engage, and scale.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/about-img.png')] bg-contain bg-center bg-no-repeat aspect-[16/9] rounded-md max-w-[1450px] mx-auto px-5 md:px-[60px] my-24"></section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px] bg-lightGray-500">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <h3 className="font-heading w-full md:w-1/2 text-2xl sm:text-3xl lg:text-4xl leading-snug md:leading-tight font-semibold">
              We don&apos;t just build another software.
            </h3>
            <p className="w-full md:w-1/2 leading-relaxed">
              Every line of code we write, every interface we design, and every
              solution we deliver is driven by one purpose — to make technology
              feel human. We believe software should be functional and
              emotional; it should perform seamlessly while inspiring confidence
              in those who use it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px]">
        <div className="flex flex-col items-center justify-between gap-[72px] max-w-[1450px] mx-auto">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
              The Codemaven Ethos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  Craftsmanship
                </h4>
              </div>
              <div>
                <p>
                  We believe true excellence lies in the details. Every pixel,
                  every line of code, and every user interaction is crafted with
                  precision and purpose. Our work is never rushed — it&apos;s
                  refined, tested, and perfected to ensure every product we
                  deliver performs beautifully and feels effortless.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">Innovation</h4>
              </div>
              <div>
                <p>
                  Technology evolves at lightning speed — and so do we. We
                  embrace change, explore new ideas, and experiment with
                  emerging technologies to create solutions that don&apos;t just
                  meet today&apos;s needs but anticipate tomorrow&apos;s
                  possibilities. Innovation isn&apos;t an act for us — it&apos;s
                  our default state.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  Transparency
                </h4>
              </div>
              <div>
                <p>
                  Great partnerships are built on trust, and trust comes from
                  clarity. We communicate openly, set realistic expectations,
                  and collaborate closely with our clients at every step. No
                  jargon, no confusion — just honest dialogue and shared
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px] bg-lightGray-500">
        <div className="flex flex-col items-center justify-between gap-[72px] max-w-[1450px] mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-center">
              Built by makers, driven by impact.
            </h2>
          </div>
          <div>
            <p className="text-center">
              We&apos;re not just a team — we&apos;re a collective of thinkers,
              designers, and engineers who believe great software is born from
              collaboration, curiosity, and care. Our goal is to create
              technology that empowers brands, engages users, and scales
              effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px]">
        <div className="flex flex-col items-center justify-between gap-[72px] max-w-[1450px] mx-auto">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
              How We Bring Ideas to Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  Discover & Define
                </h4>
              </div>
              <div>
                <p>
                  Every successful product starts with understanding — your
                  goals, your users, and your challenges. We dive deep into your
                  business objectives, research your audience, and define a
                  clear strategy that sets the foundation for meaningful,
                  results-driven design and development.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  Design & Build
                </h4>
              </div>
              <div>
                <p>
                  We translate insights into beautiful, functional digital
                  experiences. From intuitive UI/UX design to clean, scalable
                  code — every element is built with intention. We merge
                  creativity with engineering excellence to craft solutions that
                  not only look stunning but perform flawlessly across devices.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-[145px] bg-lightGray-500 p-[22px] rounded-md">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl">
                  Launch & Grow
                </h4>
              </div>
              <div>
                <p>
                  Our job doesn&apos;t end at deployment — it evolves. We
                  analyze performance, gather feedback, and continuously refine
                  your product to ensure it scales with your business. From
                  feature expansion to optimization, we help your product stay
                  relevant, reliable, and ready for what&apos;s next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px]">
        <div className="max-w-[1450px] mx-auto flex flex-col gap-[72px]">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading text-center font-semibold">
              Our Best Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {projectImages.map((project, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] md:py-24 px-5 md:px-[60px]">
        <div className="max-w-[1450px] mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-[#A4B9FF] flex flex-col items-center justify-between py-[72px] px-5 rounded-md gap-[22px]">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
              Let&apos;s Build Something Extraordinary
            </h2>
            <Button>
              <Link href={"https://cal.com/codemavensolutions/30min"}>
                Book a call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
