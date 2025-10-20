import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-500 py-[72px] md:py-24 px-[20px] md:px-[60px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] gap-10 max-w-[1450px] mx-auto">
        {/* Column 1 - Company Info */}
        <div className="flex flex-col gap-5">
          <Image
            src={"/assets/footer-logo.png"}
            alt="Codemaven Solutions"
            width={402}
            height={39}
            className="max-w-full h-auto"
            loading="lazy"
            quality={75}
          />
          <p className="text-white md:max-w-[443px] max-w-full">
            Codemaven Solutions is a full-service software company specializing
            in Web, Mobile, and AI-powered application development. We partner
            with startups and businesses worldwide to craft high-performance,
            scalable, and user-centric digital products.
          </p>
        </div>

        {/* Column 2 - Links (Narrower) */}
        <div className="flex flex-col gap-[43px] md:min-w-[100px]">
          <p className="font-semibold">Links</p>
          <nav className="flex flex-col gap-5">
            <Link href={"/"} className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3 - Contact */}
        <div className="flex flex-col gap-[43px]">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col gap-5">
            <Link
              href={"https://wa.me/923147257787"}
              className="hover:text-gray-300 transition-colors break-all"
            >
              +923147257787
            </Link>
            <Link
              href={"mailto:hello@codemavensolutions.com"}
              className="hover:text-gray-300 transition-colors break-all"
            >
              hello@codemavensolutions.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
