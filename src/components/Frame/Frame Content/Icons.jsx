import interact from "interactjs";
import { useEffect, useRef } from "react";

function Icons({ icon, setIcons }) {
  const iconRef = useRef(null);
  const position = { x: 0, y: 0 };
  useEffect(() => {
    interact(iconRef.current).draggable({
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
    <img
      ref={iconRef}
      src={icon}
      alt=""
      onDoubleClick={() => setIcons((icons) => [...icons, icon])}
      className="w-20 h-20 object-contain absolute top-1/2 left-1/2 -translate-x-1/2"
    />
  );
}

export default Icons;
