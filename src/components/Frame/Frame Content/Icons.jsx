import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

function Icons({ icon, index, icons, setIcons, isPortrait }) {
  const iconRef = useRef(null);
  const position = { x: 0, y: 0 };
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    interact(iconRef.current).draggable({
      listeners: {
        start() {
          setIsDelete(false);
        },
        move(event) {
          setIsDelete(false);
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
        end() {
          setIsDelete(false);
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
    <div
      ref={iconRef}
      key={index}
      style={{ top: `${5 + index}0%` }}
      className="absolute px-4 left-1/2 -translate-x-1/2"
    >
      {isDelete && (
        <>
          <button
            className="delete-content w-8 h-8 bg-red-400 text-white flex justify-center items-center absolute -top-8 left-0  rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => {
              const filter = icons.filter((icon, i) => {
                if (i !== index) {
                  return icon;
                }
              });
              setIcons(filter);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            className="duplicate-content w-8 h-8 bg-blue-400 text-white flex justify-center items-center absolute -top-8 left-1/2 -translate-x-1/2  rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => {
              setIcons((icons) => [...icons, icon]);
              setIsDelete(false);
            }}
          >
            <i class="fa-solid fa-clone"></i>
          </button>
          <span
            className="approve-content w-8 h-8 bg-green-400 text-white flex justify-center items-center absolute -top-8 right-0 rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => setIsDelete(false)}
          >
            <i className="fa-solid fa-check"></i>
          </span>
        </>
      )}
      <img
        src={icon}
        alt=""
        className={`${isPortrait ? "w-24 h-24" : "w-16 h-16+"} object-contain`}
        onClick={() => setIsDelete(true)}
      />
    </div>
  );
}

export default Icons;
