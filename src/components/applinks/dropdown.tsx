"use client";

import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  title: string;
  links: { href: string; label: string }[];
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { title, links } = props;
  return (
    <ul className="flex flex-col gap-2 mb-2 relative">
      <li className="group relative">
        <span className="text-black font-normal cursor-pointer group-hover:text-red-500">
          {title}
        </span>

        {/* Dropdown */}
        {links && links.length > 0 && (
          <ul className="hidden group-hover:block flex-col absolute top-full left-0 bg-white border border-gray-200 px-4 py-4 rounded shadow-md w-max space-y-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-custom-gray hover:text-black rounded py-1"
              >
                <Link href={link.href} className="block w-full text-black hover:text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdownMenu;
