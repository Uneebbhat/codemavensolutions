"use client";
import Link from "next/link";
import React, { useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companyLinks = [
    { label: "About Us", href: "#about-us" },
    { label: "Our Services", href: "#our-services" },
    { label: "Our Projects", href: "#our-project" },
    // { label: "Careers", href: "#careers" },
  ];

  const serviceLinks = [
    { label: "UI/UX Design", href: "#our-services" },
    { label: "Web Development", href: "#our-services" },
    { label: "Mobile Apps", href: "#our-services" },
    { label: "AI Chatbots", href: "#our-services" },
    { label: "Custom Software Development", href: "#our-services" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@codemavensolutions.com",
      href: "mailto:hello@codemavensolutions.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+92 314 7257787",
      href: "https://wa.me/923147257787",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Lahore, Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/codemavensolutions/",
      label: "LinkedIn",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/codemavensolutions/",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/codemavensolutions/",
      label: "Instagram",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-black-500 text-white mt-[12px] rounded-[20px]"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-[50px] flex-wrap">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">Codemaven Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative digital solutions that empower businesses to
              thrive in the modern world.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <Link
                    href={info.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors break-words"
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
