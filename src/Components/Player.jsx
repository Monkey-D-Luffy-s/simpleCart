import React, { useState, useRef } from "react";

function Player() {
  const nameRef = useRef();
  const [showName, setShowName] = useState(null);

  function handleShowName() {
    setShowName(nameRef.current.value);
    nameRef.current.value = "";
  }

  return (
    <section>
      <h2 className="uppercase px-2 py-1 mt-1 text-zinc-700 font-bold ">
        Welcome {showName ? showName : "unknown entity"}
      </h2>
      <p>
        <input
          ref={nameRef}
          type="text"
          className="text-gray-400 bg-stone-500 px-2 mx-2 py-1 mt-1 outline-none outline-orange-700 bg-inherit"
        />
        <button className="text-gray-400" onClick={handleShowName}>
          Set Name
        </button>
      </p>
    </section>
  );
}

export default Player;
