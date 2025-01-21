import Link from "next/link";
import { FrownIcon } from "lucide-react";

import { Button } from "../app/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <FrownIcon className="w-16 h-16 text-muted-foreground mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild>
        <Link href="/">Volver a la página principal</Link>
      </Button>
    </div>
  );
}
