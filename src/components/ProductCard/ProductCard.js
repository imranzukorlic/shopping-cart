import React from "react";

export default function ProductCard({ image, title, price, onClick }) {
  return (
    <div className="w-60 h-96 px-6 bg-white rounded py-6 transform transition-all hover:translate-y-2">
      <img className="h-50 object-cover mb-2 h-48" src={image} alt="Product" />
      {/* <div className="p-2"></div> */}
      <h2 className="font-bold text-lg mt-2 ml-10 h-16 "> {title} </h2>
      {/* <div className="m-2"></div> */}
      {/* <span className="flex items-center ml-23  mt-4 ">
          <img src={image} className="h-3 px-1 "></img>
          <img src={image} className="h-3 px-1"></img>
          <img src={image} className="h-3 px-1"></img>
        </span> */}
      <div className="flex justify-between ">
        <button
          onClick={onClick}
          className="bg-green-400 px-4 py-1 h-15 w-35 hover:bg-violet-600 text-white rounded mt-3 ml-1 "
        >
          Add to cart
        </button>
        <p className="px-4 py-2 text-black-300 rounded mt-3 ">$ {price}</p>
      </div>
    </div>
  );
}
