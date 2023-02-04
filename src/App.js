import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./snow";
import Count from "./pages/Count";
import Birthday from "./pages/Birthday";
import Note from "./pages/Note";
import Gallery from "./pages/Gallery";
import Plane from "./pages/Plane";

function App() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="App">
      {/* https://govindcodes.github.io/ValentineWish/ */}
      {menu === 1 ? <Count /> : null}
      {menu === 2 ? <Birthday /> : null}
      {menu === 3 ? <Note /> : null}
      {menu === 4 ? <Gallery /> : null}
      {menu === 5 ? <Plane /> : null}
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          bottom: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        <button className="main-btn" onClick={() => setMenu(1)}>
          🙆‍♂️
        </button>
        <button className="main-btn" onClick={() => setMenu(2)}>
          🎂
        </button>
        <button className="main-btn" onClick={() => setMenu(3)}>
          ❤️
        </button>
        <button className="main-btn" onClick={() => setMenu(4)}>
          🙆
        </button>
        <button className="main-btn" onClick={() => setMenu(5)}>
          ✈️
        </button>
      </div>
    </div>
  );
}

export default App;
