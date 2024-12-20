'use client'
import React, { useState } from "react";

export interface ItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
}

const MenuItem: React.FC<ItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="font-medium">
      <div className="flex justify-between cursor-pointer border-b py-2 hover:text-[#f9f0c9]" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-xl">{item.name}</h3>
        <h3 className="text-xl">${item.price}</h3>
      </div>
      {isOpen && (
        <div className="text-lg py-2">{item.description}</div>
      )}
    </div>
  );
};

export default MenuItem;
