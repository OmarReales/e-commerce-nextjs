import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";
import { products } from "../../../data/products";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

async function getProduct(id) {
  const product = products.find((p) => p.id.toString() === id);
  if (!product) notFound();
  return product;
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-white">
            <Image
              src={product.imageURL || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className="aspect-square object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-bold mt-2">
              ${product.price.toLocaleString()}
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Cantidad</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar cantidad" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(
                    { length: Math.min(5, product.stock) },
                    (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Añadir al Carrito
            </Button>
            <Button variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <Separator />
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Descripción del Producto
            </h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Categoría:</strong> {product.category}
            </p>
            <p>
              <strong>Marca:</strong> {product.brand}
            </p>
            <p>
              <strong>Stock disponible:</strong> {product.stock}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
