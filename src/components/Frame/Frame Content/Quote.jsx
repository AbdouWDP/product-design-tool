import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

function Quote({ text, index, quotes, setQuotes }) {
  const quoteRef = useRef(null);
  const position = { x: 0, y: 0 };
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    interact(quoteRef.current).draggable({
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
      ref={quoteRef}
      key={index}
      className="quote px-4 absolute top-20 left-1/2 -translate-x-1/2 font-semibold touch-none select-none text-lg text-center whitespace-nowrap"
    >
      {isDelete && (
        <>
          <button
            className="delete-content w-8 h-8 bg-red-400 text-white flex justify-center items-center absolute -top-8 left-0  rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => {
              const filter = quotes.filter((quote, i) => {
                if (i !== index) {
                  return quote;
                }
              });
              setQuotes(filter);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            className="duplicate-content w-8 h-8 bg-blue-400 text-white flex justify-center items-center absolute -top-8 left-1/2 -translate-x-1/2  rounded-full duration-150 ease-in cursor-pointer"
            onClick={() => {
              setQuotes((quotes) => [...quotes, text]);
              setIsDelete(false);
            }}
          >
            <i class="fa-solid fa-clone"></i>
          </button>
          <button
            className="approve-content w-8 h-8 bg-green-400 text-white flex justify-center items-center absolute -top-8 right-0 rounded-full duration-150 ease-in cursor-pointer"
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
        {text}
      </p>
    </div>
  );
}

export default Quote;
