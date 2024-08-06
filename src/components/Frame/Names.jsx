import interact from "interactjs";
import { useEffect, useRef } from "react";

function Names({ name }) {
  const nameRef = useRef(null);

  useEffect(() => {
    const position = { x: 0, y: 0 };
    interact(nameRef.current).draggable({
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
      suppressContentEditableWarning
      className="name absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold touch-none select-none text-lg text-center whitespace-nowrap"
      ref={nameRef}
    >
      {name}
    </p>
  );
}

export default Names;
