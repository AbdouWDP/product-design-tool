import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";
import Quote from "./Frame Content/Quote";
import Names from "./Frame Content/Names";
import Dates from "./Frame Content/Dates";
import Icons from "./Frame Content/Icons";
import React, { useEffect, useState } from "react";

function Frame({
  quotes,
  setQuotes,
  names,
  setNames,
  icons,
  setIcons,
  dates,
  setDates,
  isPortrait,
  frameColor,
}) {
  const frame = [
    { color: "black", isPortrait: true, img: blackFramePortrait },
    { color: "black", isPortrait: false, img: blackFrameLandscape },
    { color: "white", isPortrait: true, img: whiteFramePortrait },
    { color: "white", isPortrait: false, img: whiteFrameLandscape },
    { color: "gold", isPortrait: true, img: goldFramePortrait },
    { color: "gold", isPortrait: false, img: goldFrameLandscape },
  ];

  const [image, setImage] = useState(null);

  useEffect(() => {
    frame.map((frame) => {
      if (frame.color === frameColor && frame.isPortrait === isPortrait) {
        setImage(frame.img);
      }
    });
  }, [isPortrait, frameColor]);

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
          src={image}
          alt=""
          className="w-full h-full object-contain select-none"
          draggable="false"
        />
        {quotes.length > 0 &&
          quotes.map((quote, index) => (
            <Quote
              text={quote}
              index={index}
              quotes={quotes}
              setQuotes={setQuotes}
            />
          ))}
        {names.length > 0 &&
          names.map((name, index) => (
            <Names
              name={name}
              index={index}
              names={names}
              setNames={setNames}
            />
          ))}
        {dates.length > 0 &&
          dates.map((date, index) => (
            <Dates
              date={date}
              setDates={setDates}
              dates={dates}
              index={index}
            />
          ))}
        {icons.length > 0 &&
          icons.map((icon, index) => (
            <Icons
              icon={icon}
              index={index}
              icons={icons}
              setIcons={setIcons}
            />
          ))}
      </div>
    </section>
  );
}

export default React.memo(Frame);
