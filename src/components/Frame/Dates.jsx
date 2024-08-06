import interact from "interactjs";
import { useEffect, useRef } from "react";

function Dates({ date, setDates }) {
  const dateRef = useRef(null);
  const position = { x: 0, y: 0 };
  useEffect(() => {
    interact(dateRef.current).draggable({
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
      className="name absolute bottom-20 left-1/2 -translate-x-1/2 font-semibold touch-none select-none text-lg text-center whitespace-nowrap"
      ref={dateRef}
      onDoubleClick={(e) =>
        setDates((dates) => [...dates, e.target.textContent])
      }
    >
      {date}
    </p>
  );
}

export default Dates;
