"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="lg:hidden relative">
      <button
        onClick={handleMobileMenuToggle}
        aria-label="Toggle mobile menu"
        className="focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      {isMobileMenuOpen && (
        <ul className="absolute top-full right-0 w-[200px] rounded bg-slate-900 flex flex-col justify-between p-4 divide-y divide-slate-700">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="w-full py-2 cursor-pointer transition-all hover:bg-red-900"
            >
              <Link
                href={link.href}
                className="flex flex-row items-center gap-4 p-2 w-full"
                onClick={handleMobileMenuToggle}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
