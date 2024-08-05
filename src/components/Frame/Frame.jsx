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
  const position = { x: 0, y: 0 };
  useEffect(() => {
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
      contentEditable
      className="quote absolute top-20 left-1/2 -translate-x-1/2 font-semibold touch-none select-none text-lg text-center whitespace-nowrap"
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
      style={{ height: "90vh" }}
    >
      <div className="w-full h-full max-md:h-fit m-auto relative">
        <img
          src={goldFramePortrait}
          alt=""
          className="w-full h-full object-contain"
        />
        <Quote text="TEST1" />
      </div>
    </section>
  );
}

export default Frame;
