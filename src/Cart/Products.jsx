import React, { useContext } from "react";
import { ProductsList } from "./ProductsList.js";
import { CartContext } from "./Store/CartContext.jsx";

function Products() {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="flex justify-center">
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ProductsList.map((item) => (
          <li key={item.id} className="text-center mt-20 px-4 py-4">
            <div className=" h-80 w-60 mt-5 mb-40 flex flex-col rounded-t-md">
              <p>
                <img src={item.Img} className="h-100 w-full rounded-rt-md" />
              </p>
              <p className="bg-gray-700 rounded-b-md">
                <p className="px-2 py-1 mt-2 font-serif text-md text-zinc-300">
                  {item.Name}
                </p>
                <p className=" px-2 py-1 mt-1 text-zinc-200">
                  Price: {item.Price}$
                  <button
                    className="ml-3 px-4 py-1 bg-zinc-600 rounded-md hover:bg-zinc-950 hover:text-zinc-200"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                </p>
                <p className="px-2 py-1 mb-3 text-zinc-300">
                  {item.Description}
                </p>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Products;
