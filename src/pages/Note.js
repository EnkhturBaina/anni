import React, { useState } from "react";
import { Col, Row, Select } from "antd";
import notes from "../notes.json";

function Note() {
  const [selected, setSelected] = useState(null);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelected(value);
  };

  return (
    // <div style={{ width: "100%" }}>
    //   <Select
    //     defaultValue={"0"}
    //     style={{
    //       width: "100%",
    //     }}
    //     onChange={handleChange}
    //     options={notes}
    //   />
    //   <div>
    //     {notes.map((el, index) => {
    //       if (selected === el.value) {
    //         return <span key={index}>{el.content}</span>;
    //       }
    //     })}
    //   </div>
    // </div>
    <div style={{ textAlign: "center" }}>Энд юм хийж байгаамаа</div>
  );
}

export default Note;
