import { useState } from "react";
import "./App.css";
import Player from "./Components/Player";
import Challenges from "./Components/Challenges";
import Model from "./Components/Model";
import CartHome from "./Cart/CartHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CartHome />
      {/* <div className="text-white text-center bg-gray-950 rounded-md px-4 py-5 mx-10 md:mx-40 my-5">
        <p className="text-xl flex justify-center text-zinc-600 md:text-3xl font-game uppercase">
          The
          <p className="text-orange-700 px-4 md:px-6">almost</p>
          final countdown
        </p>
        <p className="text-xs font-game text-orange-700">
          Stop the timer once your realize the time is almost up
        </p>
        <Player></Player>
      </div>
      <div className="grid grid-cols-2 text-center">
        <Challenges title="Easy" targetTime="1" />
        <Challenges title="Eedium" targetTime="5" />
        <Challenges title="Hard" targetTime="10" />
        <Challenges title="Pros" targetTime="30" />
      </div> */}
    </div>
  );
}

export default App;
