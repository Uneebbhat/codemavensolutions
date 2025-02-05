"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const routes = [
    {
      label: "About Us",
      href: "#about-us",
    },
    {
      label: "Our Services",
      href: "#our-services",
    },
    {
      label: "Our Project",
      href: "#our-project",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-[12px] w-full flex items-center justify-between bg-black-500 text-white rounded-[20px] p-[20px] z-20"
    >
      <div className="logo">
        <a href="#home">
          <Image
            src="/assets/logo.svg"
            alt="Codemaven Solutions"
            width={100}
            height={100}
          />
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-2.5">
        <nav className="flex items-center space-x-2.5">
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              <a href={route.href} className="hover:text-blue-500">
                {route.label}
              </a>
              {index < routes.length && (
                <span className="mx-2.5 text-[30px]">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <Link
          href="https://cal.com/codemavensolutions/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="transition-all bg-white text-black-500 hover:bg-blue-500 hover:text-white">
            Let&apos;s talk.
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white transition-all hover:scale-110"
        >
          <Menu />
        </button>
        {isMounted && (
          <div
            className={`
              absolute top-full left-0 w-full 
              bg-white text-black-500 rounded-[8px]
              transform origin-top 
              transition-all duration-300 ease-in-out
              ${
                isOpen
                  ? "opacity-100 translate-y-0 scale-y-100"
                  : "opacity-0 -translate-y-2 scale-y-0 pointer-events-none"
              }
            `}
          >
            <nav className="flex flex-col items-start p-5 space-y-5">
              {routes.map((route) => (
                <a
                  key={route.href}
                  href={route.href}
                  className="text-black-500 hover:text-blue-500 transition-all"
                >
                  {route.label}
                </a>
              ))}

              <Link
                href="https://cal.com/codemavensolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-black-500 text-white hover:bg-blue-500">
                  Let&apos;s talk.
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
