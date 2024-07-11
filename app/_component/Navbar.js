import { NAV_LINKS } from "@/constants";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="">
      <ul className="hidden h-full lg:flex lg:flex-row gap-20">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="flex flex-row gap-4 cursor-pointer transition-all hover:font-bold"
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
