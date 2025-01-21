import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/productos/detail/${item.id}`} className="flex flex-col">
        <Image
          alt={item.title}
          src={item.imageURL}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <div className="px-4 border-t border-gray-200">
          <h4 className="text-sm my-4">{item.title}</h4>
          <p className="text-2x1 font-semibold mb-6">{item.price}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
