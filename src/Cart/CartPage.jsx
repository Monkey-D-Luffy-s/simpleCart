import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import CartItems from "./CartItems";

const CartPage = forwardRef(function CartPage({}, ref) {
  const diaref = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        diaref.current.showModal();
      },
    };
  });

  console.log("change by anatolii");

  return createPortal(
    <dialog ref={diaref} className="bg-zinc-600 mt-10 pt-5 w-[60%] rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="px-2 ml-4 text-2xl font-serif text-zinc-300">
            Cart Items changed by sai to main with more descriptive
          </p>
          <form method="dialog">
            <button className="px-3 py-1 mr-10 hover:bg-zinc-400">X</button>
          </form>
        </div>
        <div>
          <CartItems />
        </div>
      </div>
    </dialog>,
    document.getElementById("Cart")
  );
});

export default CartPage;
