import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";
import Quote from "./Quote";
import { useState } from "react";

function Frame() {
  const [quotes, setQuotes] = useState(["و خلقناكم أزواجا"]);

  return (
    <section
      id="frame"
      className="w-full overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div className="w-full h-full max-md:h-fit m-auto relative">
        <img
          src={blackFramePortrait}
          alt=""
          className="w-full h-full object-contain"
          draggable="false"
        />
        {quotes.length > 0 &&
          quotes.map((quote) => (
            <Quote text={quote} quotes={quotes} setQuotes={setQuotes} />
          ))}
      </div>
    </section>
  );
}

export default Frame;
