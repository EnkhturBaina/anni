import React from "react";
import { Col, Row, Select } from "antd";

function Note() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const selects = [
    {
      value: "0",
      label: "",
    },
    {
      value: "1",
      label: "Жаргалтай үедээ",
    },
    {
      value: "2",
      label: "Гунигтай үедээ",
    },
    {
      value: "3",
      label: "Уйтгарласан үедээ",
    },
    {
      value: "4",
      label: "Надад ууралсан үедээ",
    },
    {
      value: "5",
      label: "Унтаж чадахгүй үедээ",
    },
    {
      value: "6",
      label: "Шантарсан үедээ",
    },
    {
      value: "7",
      label: "Гомдсон үедээ",
    },
    {
      value: "8",
      label: "Сансан үедээ",
    },
    {
      value: "9",
      label: "Өвдсөн үедээ",
    },
    {
      value: "10",
      label: "Уйтгарласан үедээ",
    },
  ];
  return (
    // <div style={{ width: "100%" }}>
    //   <Select
    //     style={{
    //       width: "100%",
    //     }}
    //     onChange={handleChange}
    //     options={selects}
    //   />
    //   <div>
    //     <span>
    //       Button onClick The button's onClick prop is what allows us to add a
    //       function which fires when the user clicks on the button. In the above
    //       example, we define a function sayHello which alerts a message. Then,
    //       we use this function as the value of the onClick prop. Button text
    //       Changing the inner content between the button tags changes the text of
    //       the button. "Button Text" is between the two Button tags, and that
    //       sets the Button's text. This button looks very outdated, so we'll show
    //       how to restyle this using styled-components. Default browser button
    //       styles Fun fact, if you inspect the default Button with the webkit
    //       inspector (right-click - inspect), you can see the browser's default
    //       styles defined in the user agent stylesheet.
    //     </span>
    //   </div>
    // </div>
    <div style={{ textAlign: "center" }}>Энд юм хийж байгаамаа</div>
  );
}

export default Note;
