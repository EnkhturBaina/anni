import React, { useState } from "react";
import "../birthday.css";
import ReactCardFlip from "react-card-flip";

function Birthday() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div class="cake" onClick={() => setIsFlipped(!isFlipped)}>
          <div class="plate"></div>
          <div class="layer layer-bottom"></div>
          <div class="layer layer-middle"></div>
          <div class="layer layer-top"></div>
          <div class="icing"></div>
          <div class="drip drip1"></div>
          <div class="drip drip2"></div>
          <div class="drip drip3"></div>
          <div class="candle">
            <div class="flame"></div>
          </div>
        </div>

        <div class="text" onClick={() => setIsFlipped(!isFlipped)}>
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
