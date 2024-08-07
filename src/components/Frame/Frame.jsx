import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import Quote from "./Frame Content/Quote";
import Names from "./Frame Content/Names";
import Dates from "./Frame Content/Dates";
import Icons from "./Frame Content/Icons";
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
  // function adjustText() {
  //   const element = document.querySelector(".resizable");
  //   const width = element.offsetWidth;
  //   const height = element.offsetHeight;
  //   const result = width / height;
  //   const newSize = Math.min(width, height);
  //   element.style.fontSize = `${newSize / result}px`;
  // }

  return (
    <section
      id="frame"
      className="w-full overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div
        id="frame-container"
        className="w-full h-full max-md:h-fit m-auto relative"
      >
        <img
          src={isPortrait ? blackFramePortrait : blackFrameLandscape}
          alt=""
          className="w-full h-full object-contain select-none"
          draggable="false"
        />
        {quotes.length > 0 &&
          quotes.map((quote) => <Quote text={quote} setQuotes={setQuotes} />)}
        {names.length > 0 && names.map((name) => <Names name={name} />)}
        {dates.length > 0 &&
          dates.map((date) => <Dates date={date} setDates={setDates} />)}
        {icons.length > 0 &&
          icons.map((icon) => <Icons icon={icon} setIcons={setIcons} />)}
      </div>
    </section>
  );
}

export default React.memo(Frame);
