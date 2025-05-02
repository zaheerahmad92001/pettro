'use client'
import { useState } from "react";
import Link from "next/link";
// import { FaAngleUp  } from "react-icons/fa6";
import {FaChevronUp, FaChevronDown } from "react-icons/fa";

interface AccordionSectionProps {
  title: string;
  setIsMenuOpen: (isOpen: boolean) => void;
  links: { href: string; label: string }[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, links ,setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-gray-300">
      <button
        className="w-full text-left text-black hover:text-gray-700 no-underline flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-blue-500 font-geist-mono font-bold mb-1">{title}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="list-none flex flex-col gap-3 ml-4 mt-1 mb-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-black hover:text-gray-700 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default AccordionSection;
