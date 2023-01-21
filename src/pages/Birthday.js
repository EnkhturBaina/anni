import React, { useState } from "react";
import "../birthday.css";
import ReactCardFlip from "react-card-flip";

function Birthday() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="cake" onClick={() => setIsFlipped(!isFlipped)}>
          <div className="plate"></div>
          <div className="layer layer-bottom"></div>
          <div className="layer layer-middle"></div>
          <div className="layer layer-top"></div>
          <div className="icing"></div>
          <div className="drip drip1"></div>
          <div className="drip drip2"></div>
          <div className="drip drip3"></div>
          <div className="candle">
            <div className="flame"></div>
          </div>
        </div>

        <div className="text" onClick={() => setIsFlipped(!isFlipped)}>
          <span style={{ marginBottom: 5 }}>Хамгийн дүрсгүй </span>
          <br />
          <span>Хамгийн эгдүүтэй</span>
          <br />
          <span>Бас хамгийн хөөрхөн ГОДГОР ШАР ҮРДЭЭ</span>
          <br style={{ marginBottom: 5 }} />
          <span>ТӨРСӨН ӨДРИЙН МЭНД ХҮРГЭЕ</span>
          <br />
          <span>
            Амьдралд минь өнгө нэмж гэрэл гэгээ болон гэнэт гарж ирсэнд маш их
            баярладаг шүү ❤️
          </span>
          <br />
          <span>Үргэлж инээж жаргалтай яваарай</span>
          <br />
          <span>Хайртай шүү 🙆‍♂️</span>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Birthday;
