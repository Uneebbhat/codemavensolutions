import Link from "next/link";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "hello@codemaven.com",
      href: "mailto:hello@codemaven.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "123 Tech Street, Silicon Valley, CA",
    },
  ];

  return (
    <>
      <footer className="bg-black-500 text-white rounded-[20px] p-[20px] mt-[12px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h1 className="text-h3 md:text-h2 lg:text-h1 font-medium leading-tight">
                Let&apos;s Build Something Amazing
              </h1>
              <div className="mt-[30px] flex flex-wrap gap-x-[40px]">
                <nav className="flex flex-col gap-[20px]">
                  {routes.map((route, index) => (
                    <Link
                      key={index}
                      href={route.href}
                      className="hover:text-blue-500 transition-colors duration-200 text-bodyLarge"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 rounded-[15px] p-[30px]">
              <h2 className="text-h4 md:text-h3 font-medium mb-[25px]">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-[25px]">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[15px] hover:translate-x-2 transition-transform duration-200"
                  >
                    <div className="bg-white/10 p-2 rounded-full">
                      {info.icon}
                    </div>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="hover:text-blue-500 transition-colors duration-200"
                      >
                        {info.text}
                      </Link>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[60px] pt-[30px] border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-[20px]">
              <h3 className="text-h5 font-medium">Codemaven Solutions</h3>
              <p className="text-sm text-white/70 text-center sm:text-right">
                © {new Date().getFullYear()} Codemaven Solutions. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
