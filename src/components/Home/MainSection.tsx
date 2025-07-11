"use client";
import Button from "../common/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
const MainSection = () => {
  return (
    <main
      className="bg-black-500 text-white text-center min-h-[84vh] rounded-[20px] flex flex-col relative mt-[12px] px-[20px]"
      id="home"
    >
      <Spline
        scene="https://prod.spline.design/F6nNb7ltNkvaT7ro/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="container mx-auto relative z-10 flex flex-col flex-grow justify-end pb-[40px] gap-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Reduced y distance
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.3 }} // Reduced duration and removed delay
          className=""
        >
          <h1 className="text-h4 md:text-h1 font-medium leading-[37px] md:leading-[73px]">
            Crafting Digital
            <br />
            Experiences That Connect
          </h1>
          <p className="text-bodyMedium leading-[18px] w-full md:text-bodyLarge md:leading-[24px]  mx-auto font-regular">
            We build innovative digital solutions that transform your vision
            into success—helping you
            <br />
            engage your audience, streamline your operations, and grow your
            business online.
          </p>

          <Link
            href="https://cal.com/codemavensolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full block md:hidden bg-white text-black-500 hover:bg-[#003AFC] hover:text-white transition-all">
              Let&apos;s talk.
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default MainSection;
