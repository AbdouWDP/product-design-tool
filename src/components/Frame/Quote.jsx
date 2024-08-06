import interact from "interactjs";
import { useEffect, useRef } from "react";

function Quote({ text, quotes, setQuotes }) {
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
      onDoubleClick={(e) =>
        setQuotes((quotes) => [...quotes, e.target.textContent])
      }
    >
      {text}
    </p>
  );
}

export default Quote;
