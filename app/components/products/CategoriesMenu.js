"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/productos", label: "Todos" },
  { href: "/productos/puertas", label: "Puertas" },
  { href: "/productos/ventanas", label: "Ventanas" },
];
const CategoriesMenu = () => {
  const pathName = usePathname();
  return (
    <aside className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathName === link.href ? "font-semibold border-b" : ""
          } py-2`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
