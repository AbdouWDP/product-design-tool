import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";
import Quote from "./Quote";
import Names from "./Names";
import Dates from "./Dates";
import React from "react";

function Frame({
  quotes,
  setQuotes,
  names,
  icons,
  setIcons,
  dates,
  setDates,
  isPortrait,
}) {
  function adjustText() {
    const element = document.querySelector(".resizable");
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const result = width / height;
    const newSize = Math.min(width, height);
    element.style.fontSize = `${newSize / result}px`;
  }

  return (
    <section
      id="frame"
      className="w-full overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div className="w-full h-full max-md:h-fit m-auto relative">
        <img
          src={isPortrait ? blackFramePortrait : blackFrameLandscape}
          alt=""
          className="w-full h-full object-contain"
          draggable="false"
        />
        {quotes.length > 0 &&
          quotes.map((quote) => <Quote text={quote} setQuotes={setQuotes} />)}
        {names.length > 0 && names.map((name) => <Names name={name} />)}
        {dates.length > 0 ? (
          dates.map((date) => <Dates date={date} setDates={setDates} />)
        ) : (
          <Dates date={new Date().toLocaleDateString()} setDates={setDates} />
        )}
      </div>
    </section>
  );
}

export default React.memo(Frame);
