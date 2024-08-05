import React from "react";
import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";

function Frame() {
  return (
    <section id="frame" className="w-full h-full">
      <div className="w-fit h-full m-auto relative">
        <img
          src={goldFramePortrait}
          alt=""
          className="w-full h-full object-contain max-h-full"
        />
      </div>
    </section>
  );
}

export default Frame;
