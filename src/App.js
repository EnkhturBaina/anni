import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./snow";
import Count from "./pages/Count";
import Birthday from "./pages/Birthday";
import Note from "./pages/Note";
import Gallery from "./pages/Gallery";

function App() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="App">
      {menu === 1 ? <Count /> : null}
      {menu === 2 ? <Birthday /> : null}
      {menu === 3 ? <Note /> : null}
      {menu === 4 ? <Gallery /> : null}
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
        {/* <button className="main-btn" onClick={() => setMenu(2)}>
          🎂
        </button> */}
        <button className="main-btn" onClick={() => setMenu(3)}>
          ❤️
        </button>
        <button className="main-btn" onClick={() => setMenu(4)}>
          🙆
        </button>
      </div>
    </div>
  );
}

export default App;
