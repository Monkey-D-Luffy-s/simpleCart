import React from "react";
import { CartContext } from "./Store/CartContext";
import { useContext } from "react";

function CartItems() {
  const { Items, handleCountChane } = useContext(CartContext);
  let Total = Items.reduce((acc, item) => acc + item.Price * item.count, 0);
  return (
    <div>
      <ul>
        {Items.map((item) => (
          <li key={item.id} className="py-2">
            <div className="flex justify-between">
              <p className=" px-6 py-1 flex gap-2 text-zinc-200 text-xl">
                {item.Name}
                <p>{item.Price}$</p>
              </p>
              <p className="flex justify-evenly gap-4 mr-8">
                <button
                  className=" hover:bg-zinc-700 rounded-md px-2 py-1 text-zinc-200 bg-inharit"
                  onClick={() => handleCountChane("+", item.id)}
                >
                  +
                </button>
                <p className=" hover:bg-zinc-700 rounded-md px-2 py-1 text-zinc-200 bg-inharit">
                  {item.count}
                </p>
                <button
                  className=" hover:bg-zinc-700 rounded-md px-2 py-1 text-zinc-200 bg-inherit"
                  onClick={() => handleCountChane("-", item.id)}
                >
                  -
                </button>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <hr className="mx-6 mt-2" />
      <div className="flex justify-between">
        <p className="font-bold text-zinc-300 px-6 py-4">Total</p>
        <p className="mr-16 py-2 text-zinc-300 font-bold">{Total}$</p>
      </div>
    </div>
  );
}

export default CartItems;
