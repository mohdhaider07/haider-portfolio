import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header: React.FC = () => (
  <header className="mb-6">
    <h1 className="text-5xl font-serif font-bold text-center tracking-wide mb-2">
      MOHD HAIDER
    </h1>
    <div className="flex flex-col items-center gap-1 text-base text-gray-900">
      <div className="flex flex-wrap justify-center gap-4 mb-1">
        {/* <span className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          +91 9250210325
        </span> */}
        <a
          href="mailto:mohdhaider.altide@gmail.com"
          className="flex items-center gap-1 text-blue-700 underline cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          mohdhaider.altide@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mohd-haider-96a82620b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-700 underline cursor-pointer"
        >
          <FaLinkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/mohdhaider07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-700 underline cursor-pointer"
        >
          <FaGithub className="w-4 h-4" />
          mohdhaider07
        </a>
        <a
          href="https://hashnode.com/@mohdhaider07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-700 underline cursor-pointer"
        >
          <Globe className="w-4 h-4" />
          Blog
        </a>
        <a
          href="https://x.com/mohd_haider07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-700 underline cursor-pointer"
        >
          <span className="font-bold">X</span>
          Twitter
        </a>
      </div>
    </div>
  </header>
);

export default Header;
