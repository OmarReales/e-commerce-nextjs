import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const sidebarLinks = [
  {
    title: "Panel",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Productos",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Pedidos",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Clientes",
    href: "/admin/customers",
    icon: Users,
  },
];

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-gray-50/40">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Panel de Admin</h2>
        </div>
        <Separator />
        <nav className="p-4">
          <div className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" className="w-full justify-start">
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
