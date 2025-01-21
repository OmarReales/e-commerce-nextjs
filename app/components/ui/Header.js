"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Input } from "./input";

const categories = [
  {
    title: "Productos",
    items: [
      {
        title: "Puertas",
        href: "/productos/puertas",
        description: "Explora nuestra colección de puertas de alta calidad",
      },
      {
        title: "Ventanas",
        href: "/productos/ventanas",
        description: "Descubre nuestras ventanas modernas y funcionales",
      },
    ],
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/instantAberturasLogo.svg"
              alt="Instant Aberturas"
              width={40}
              height={40}
            />
            <span className="font-bold">Instant Aberturas</span>
          </Link>
          <div className="flex flex-col space-y-3">
            {categories[0].items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-2 py-1 text-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              {categories[0].items.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/instantAberturasLogo.svg"
                alt="Instant Aberturas"
                width={40}
                height={40}
                priority
              />
              <span className="hidden font-bold sm:inline-block">
                Instant Aberturas
              </span>
            </Link>
            <DesktopNav />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden w-full max-w-sm md:flex">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="w-full bg-background pl-8 md:w-[300px]"
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrito</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
