import React, { useEffect } from "react";

function Words() {
  useEffect(() => {
    window.test();
  }, []);

  return <canvas id="c"></canvas>;
}

export default Words;
