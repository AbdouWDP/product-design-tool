import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

function Names({ name, index, names, setNames, isPortrait }) {
  const nameRef = useRef(null);
  const position = { x: 0, y: 0 };
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    interact(nameRef.current).draggable({
      listeners: {
        start() {
          setIsDelete(false);
        },
        move(event) {
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
      ref={nameRef}
      key={index}
      style={{ left: `${index * 2 + 4}0%` }}
      className={`name px-4 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold touch-none select-none ${
        isPortrait ? "text-lg" : "text-2xl max-lg:text-lg"
      } text-center whitespace-nowrap`}
    >
      {isDelete && (
        <>
          <button
            className="delete-content w-8 h-8 text-sm bg-red-400 text-white flex justify-center items-center absolute -top-8 left-0  rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => {
              const filter = names.filter((name, i) => {
                if (i !== index) {
                  return name;
                }
              });
              setNames(filter);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>

          <button
            className="approve-content w-8 h-8 text-sm bg-green-400 text-white flex justify-center items-center absolute -top-8 right-0 rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => setIsDelete(false)}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        </>
      )}
      <p
        contentEditable
        suppressContentEditableWarning
        onClick={() => setIsDelete(true)}
      >
        {name}
      </p>
    </div>
  );
}

export default Names;
