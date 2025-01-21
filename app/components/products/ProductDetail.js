import { products } from "../../data/products";
import Image from "next/image";
import QtySelector from "./QtySelector";
import GoBack from "../ui/GoBack";

const ProductDetail = ({ id }) => {
  const item = products.find((item) => item.id === id);
  console.log(item.imageURL);
  return (
    <div className="max-w-4xl m-auto">
      <GoBack className="text-sm text-blue-500 underline mb-6" />
      <section className="flex gap-6">
        <div className="relative basis-1/2">
          <Image
            src={`${item.imageURL}`}
            alt={item.title}
            width={500}
            height={500}
          />
        </div>
        <div className="basis-1/2">
          <h2 className="text-2x1 font-semibold border-b border-gray-200 pb-4 mb-4">
            {item.title}
          </h2>
          <p className="text-4x1">$ {item.price}</p>
          <QtySelector item={item} />
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-x1 font-semibold border-b border-gray-200 pb-4 mb-4">
          Descripción
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </section>
    </div>
  );
};

export default ProductDetail;
