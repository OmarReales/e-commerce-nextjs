import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/instantAberturasLogo.svg";

const links = [
  { href: "/productos", label: "Productos" },
  { href: "/productos/puertas", label: "Puertas" },
  { href: "/productos/ventanas", label: "Ventanas" },
];

const Header = () => {
  return (
    <header className="w-full bg-gray-600">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Instant Aberturas" width={50} height={50} />
        </Link>
        <nav className="flex justify-between gap-2">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-slate-100 p-3"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
