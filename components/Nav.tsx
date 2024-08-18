"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },

  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
