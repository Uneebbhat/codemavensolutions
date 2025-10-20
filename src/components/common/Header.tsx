"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  return (
    <>
      <header className="px-5 md:px-[60px] py-5 border-b-2">
        <div className="flex items-center justify-between max-w-[1450px] mx-auto">
          {/* Logo */}
          <div className="group relative w-[53px] h-[31px]">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Codemaven Solutions"
                width={53}
                height={31}
                className="absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                loading="lazy"
                quality={75}
              />
              <Image
                src="/logo-blue.png"
                alt="Codemaven Solutions"
                width={53}
                height={31}
                className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                loading="lazy"
                quality={75}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            <Link
              href={"/"}
              className="hover:text-blue-500 transition-colors text-[14px]"
            >
              Home
            </Link>

            <Link
              href={"/about"}
              className="hover:text-blue-500 transition-colors text-[14px]"
            >
              About
            </Link>

            {/* Services dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center justify-center gap-2 hover:text-blue-500 transition-colors text-[14px]">
                Services <ChevronDown size={16} />
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 transition-all duration-200 overflow-hidden ${
                  open
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="flex flex-col">
                  <Link
                    href="/services/web-development"
                    className="px-4 py-2 hover:bg-gray-100 transition-colors text-[14px]"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/app-development"
                    className="px-4 py-2 hover:bg-gray-100 transition-colors text-[14px]"
                  >
                    App Development
                  </Link>
                  <Link
                    href="/services/ui-ux-design"
                    className="px-4 py-2 hover:bg-gray-100 transition-colors text-[14px]"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="/services/ai-solutions"
                    className="px-4 py-2 hover:bg-gray-100 transition-colors text-[14px]"
                  >
                    AI Solutions
                  </Link>
                </div>
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <span
                className="text-[14px] text-muted-foreground cursor-not-allowed flex items-center gap-1"
                aria-disabled="true"
              >
                Services
              </span>
            </div>
          </nav>

          {/* CTA */}
          <Button className="hidden md:block">
            <Link href={"https://cal.com/codemavensolutions/30min"}>
              Book a call
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menu hamburger"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <Image
            src="/logo-blue.png"
            alt="Codemaven Solutions"
            width={100}
            height={40}
          />
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} aria-label="Menu close" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-6 text-lg font-medium text-gray-800">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full hover:text-blue-500 transition-colors"
              aria-label="Services dropdown button"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`flex flex-col pl-3 mt-2 overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/services/web-development"
                onClick={() => setMobileOpen(false)}
                className="py-1 text-gray-600 hover:text-blue-500"
              >
                Web Development
              </Link>
              <Link
                href="/services/app-development"
                onClick={() => setMobileOpen(false)}
                className="py-1 text-gray-600 hover:text-blue-500"
              >
                App Development
              </Link>
              <Link
                href="/services/ui-ux-design"
                onClick={() => setMobileOpen(false)}
                className="py-1 text-gray-600 hover:text-blue-500"
              >
                UI/UX Design
              </Link>
              <Link
                href="/services/ai-solutions"
                onClick={() => setMobileOpen(false)}
                className="py-1 text-gray-600 hover:text-blue-500"
              >
                AI Solutions
              </Link>
            </div>
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          <div className="mt-6">
            <Button className="w-full">
              <Link href={"https://cal.com/codemavensolutions/30min"}>
                Book a call
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
