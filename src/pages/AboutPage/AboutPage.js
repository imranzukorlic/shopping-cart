import React from "react";
import products from "../../common/items.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

export default function AboutPage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <div className="flex flex-wrap justify-center items-baseline py-16 bg-sky-400 ">
      {products.map((product) => (
        <div className="flex basis-1/4 justify-center items-center mt-10">
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
          />
        </div>
      ))}
    </div>
  );
}
