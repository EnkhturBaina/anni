import React, { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { TypeAnimation } from "react-type-animation";
import ReactCardFlip from "react-card-flip";
import "../valentine.css";

const TEXTS = [
  "so",
  "soo",
  "soooo",
  "sooooo",
  "soooooo",
  "sooooooo",
  "soooooooo",
  "sooooooooo",
  "soooooooooo",
  "sooooooooooo",
  "soooooooooooo",
  "sooooooooooooo",
  "soooooooooooooo",
  "sooooooooooooooo",
  "soooooooooooooooo",
  "sooooooooooooooooo",
  "soooooooooooooooooo",
  "sooooooooooooooooooo",
];

function Valentine() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <section className="inline">
        Love you
        <ReactTextTransition
          springConfig={presets.gentle}
          style={{ margin: "0 4px" }}
          inline
        >
          {TEXTS[index % TEXTS.length]}
        </ReactTextTransition>
        much -1 🤭.
      </section>
      <div className="card-container">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="bubududu" onClick={() => setIsFlipped(!isFlipped)}>
            <img className="bubududuImg" src={require("../bubududu.jpg")} />
          </div>
          <div className="text" onClick={() => setIsFlipped(!isFlipped)}>
            <span>
              Бараан өдрийн төгсгөлд байж болох хамгийн тайван газар бол чиний
              тэврэлт гэж чи мэдэх үү?
            </span>
            <br />
            <span>
              Цээж дүүрэн амьсгаа аваад чиний нүдрүү харахад л тэр их бухимдал
              хаана байна гэмээр алга болдог гэдгийг чи мэдэх үү?
            </span>
            <br />
            <span>
              Тэгээд бас тэврээд үнсэх чинь ямар их жаргал бэлэглэдгийг чи мэдэх
              үү?
            </span>
            <br />
            <span>
              Чи миний хувьд ийм их нандин чин сэтгэлд минь байдаг хамгийн
              гэгээн бүхэнд минь багтдаг гэдгээ чи мэдэх үү?
            </span>
            <br />
            <span>Yeeeyeyeyeyeye.</span>
            <br />
            <span>Happy Valentine's Day. Хайртай шүү </span>
            <br />
            <span>🙆‍♂️❤️</span>
          </div>
        </ReactCardFlip>
      </div>
      <TypeAnimation
        speed={10}
        sequence={[
          "Happy Valentine's Day",
          2000,
          "You are my sunshine, my only sunshine",
          2000,
          "Thank you for being mine",
          2000,
          "I met you. I liked you. I love you. I’m keeping you.",
          2000,
          "I fell in love with you because of all the small things you don’t even realize you’re doing",
          () => {
            console.log("Done typing!"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
        deletionSpeed={70}
      />
    </div>
  );
}

export default Valentine;
