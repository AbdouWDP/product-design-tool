import React, { useEffect, useRef } from "react";
import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";
import interact from "interactjs";

function Quote({ text }) {
  const quoteRef = useRef(null);

  useEffect(() => {
    const position = { x: 0, y: 0 };
    interact(quoteRef.current).draggable({
      listeners: {
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
      },
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
    });
  }, []);

  return (
    <p
      className="quote absolute top-20 left-1/2 -translate-x-1/2 font-semibold touch-none"
      ref={quoteRef}
    >
      {text}
    </p>
  );
}

function Frame() {
  return (
    <section
      id="frame"
      className="w-full overflow-hidden"
      style={{ height: "90vh", maxHeight: "fit-content" }}
    >
      <div className="w-full h-full m-auto bg-red-600 relative overflow-hidden">
        <img
          src={goldFramePortrait}
          alt=""
          className="w-full h-full object-contain max-h-full"
        />
        <Quote text="TEST1" />
        <Quote text="TEST2" />
      </div>
    </section>
  );
}

export default Frame;
