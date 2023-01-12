import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./snow";
import Count from "./pages/Count";
import Birthday from "./pages/Birthday";
import Note from "./pages/Note";

function App() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="App">
      {menu === 1 ? <Count /> : null}
      {menu === 2 ? <Birthday /> : null}
      {menu === 3 ? <Note /> : null}
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
          Төрсөн өдөр
        </button> */}
        <button className="main-btn" onClick={() => setMenu(3)}>
          ❤️
        </button>
      </div>
    </div>
  );
}

export default App;
