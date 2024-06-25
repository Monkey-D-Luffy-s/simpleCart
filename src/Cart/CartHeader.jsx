import React, { useRef, useContext } from "react";
import pngtree from "../assets/pngtree1.png";
import CartPage from "./CartPage";
import AddItem from "./AddProduct/AddItem";
import { CartContext } from "./Store/CartContext";

function CartHeader() {
  const diaref = useRef();
  function handlopenCart() {
    diaref.current.open();
  }
  const { Items } = useContext(CartContext);
  return (
    <>
      <CartPage ref={diaref} />
      <div className="fixed w-full">
        <div className="flex justify-center gap-4 items-center h-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <p>
            <img src={pngtree} className="h-12 w-12"></img>
          </p>
          <p className=" text-zinc-300 font-serif md:text-5xl text-2xl">
            Mables Cart Dippers Profit
          </p>
          <p>
            <button
              className="px-6  py-1 ml-14 mt-1 bg-zinc-600 text-zinc-300 hover:bg-zinc-500 hover:text-zinc-200 text-xl rounded-md"
              onClick={handlopenCart}
            >
              Cart {Items.length}
            </button>
          </p>
          <p>
            <button
              className="px-6  py-1 ml-14 mt-1 bg-zinc-600 text-zinc-300 hover:bg-zinc-500 hover:text-zinc-200 text-xl rounded-md"
              onClick={handlopenCart}
            >
              Add Items
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default CartHeader;
