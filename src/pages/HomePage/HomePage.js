import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full justify-center py-5 h-1/5 flex-row bg-sky-200 ">
        <img
          className=" flex  w-8/12 h-1/5 "
          src="https://as1.ftcdn.net/v2/jpg/02/52/68/04/1000_F_252680454_05E8u8lQijA3nn4MloY0sDn1tVDn9YWz.jpg"
          alt="slika"
        />
      </div>
      <div className="flex items-center justify-center bg-sky-300">
        <div className="flex items-center my-12  justify-center border-4 w-1/6 h-12 border-sky-800 rounded-xl bg-sky-800  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black">
          <h3 className="font-serif text-xl font-extrabold ">
            ↓ Najbolje u ponudi ↓
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-16 bg-sky-400 ">
        {products
          .map((product) => (
            <ProductCard
              key={product.id}
              price={product.price}
              image={product.imgUrl}
              title={product.name}
              onClick={() => addToCart(product)}
            />
          ))
          .slice(0, 4)}
      </div>
      <div className="flex items-center justify-center h-28 bg-sky-500">
        <button
          onClick={() => navigate("/about")}
          className="flex items-center my-12 font-serif text-xl font-extrabold justify-center border-4 w-1/6 h-12 border-sky-800 rounded-xl bg-sky-800  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black"
        >
          Pogledaj vise ...
        </button>
      </div>
    </>
  );
}
