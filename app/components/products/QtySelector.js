"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";

const QtySelector = ({ item }) => {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (qty) => {
    console.log({ ...item, qty });
  };
  return (
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={item.stock} counter={qty} setCounter={setQty} />
      <Button className="w-full hover:bg-blue-600" onClick={handleQtyChange}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default QtySelector;
