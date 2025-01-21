import CategoriesMenu from "../../components/products/CategoriesMenu";
import ProductList from "../../components/products/ProductList";

export async function generateMetadata({ params, searchParams }, parent) {
  const { categoria } = params;
  return {
    title: `Instant Aberturas - ${categoria}`,
  };
}

export default async function Productos({ params }) {
  const { categoria } = params;
  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

      <div className="flex gap-10">
        <CategoriesMenu />
        <ProductList categoria={categoria} />
      </div>
    </main>
  );
}
