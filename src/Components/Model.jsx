import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Model = forwardRef(function Model({ result, targetTime }, ref) {
  const diaRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        diaRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={diaRef} className="px-4 py-2 bg-zinc-700">
      <h2 className="px-2 py-1 mt-1 font-game text-orange-700">You {result}</h2>
      <p className="text-zinc-400">
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p className="py-1 text-zinc-500">
        you stopped the timer with <strong> X second left</strong>
      </p>
      <form method="dialog" className="text-right">
        <button className="bg-zinc-800 px-3 py-1 text-zinc-300">Close</button>
      </form>
    </dialog>,
    document.getElementById("Model")
  );
});

export default Model;
