import React, { useEffect } from "react";
import flower from "../../assets/flower.png";
import infinity from "../../assets/infinity.png";
import ring from "../../assets/ring.png";

function FrameEditForm({
  setIsEdit,
  setQuotes,
  setNames,
  setIcons,
  setDates,
  setIsPortrait,
  isPortrait,
}) {
  const submitHandler = (e) => {
    e.preventDefault();
    const quote = e.target.quote.value;
    const male_name = e.target.male_name.value;
    const female_name = e.target.female_name.value;
    const date = e.target.date.value;

    if (quote) setQuotes((quotes) => [...quotes, quote]);
    if (male_name && female_name) setNames([male_name, female_name]);
    if (date) setDates((dates) => [...dates, date]);
    setIsEdit(null);
  };

  useEffect(() => {
    const frameShapeButtons = document.querySelectorAll(".frame-shape-button");
    frameShapeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        frameShapeButtons.forEach((b) => {
          b.classList.remove("bg-blue-400", "text-white");
          b.classList.add("border");
        });
        button.classList.add("bg-blue-400", "text-white");
        button.classList.remove("border");
      });
    });
  }, []);

  return (
    <div className="edit-frame-form w-1/2 h-fit py-4 rounded-md max-md:w-11/12 max-lg:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
      <form
        style={{ width: "95%", height: "95%" }}
        className="flex flex-col gap-2"
        dir="rtl"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="frame-shape w-full h-12 flex justify-between font-semibold">
          <div
            className={`frame-shape-button landscape h-full ${
              !isPortrait ? "bg-blue-400 text-white" : "border"
            } border-gray-300 rounded-lg flex justify-center items-center cursor-pointer duration-200`}
            style={{ width: "48%" }}
            onClick={() => setIsPortrait(false)}
          >
            أفقي
          </div>
          <div
            className={`frame-shape-button portrait h-full ${
              isPortrait ? "bg-blue-400 text-white" : "border"
            } border-gray-300 rounded-lg flex justify-center items-center cursor-pointer duration-200`}
            style={{ width: "48%" }}
            onClick={() => setIsPortrait(true)}
          >
            عمودي
          </div>
        </div>
        <div className="select-quote">
          <label htmlFor="quote" className="font-semibold">
            اختر عبارة
          </label>
          <select
            name="quote"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2"
          >
            <option value=""></option>
            <option value="و خلقناكم أزواجا">و خلقناكم أزواجا</option>
            <option value="Hello World">Hello World</option>
          </select>
        </div>
        <div className="names flex flex-col">
          <label htmlFor="quote" className="font-semibold">
            أضف أسماء
          </label>
          <div className="w-full flex justify-between">
            <input
              type="text"
              name="male_name"
              placeholder="اسم الذكر"
              className="h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
              style={{ width: "48%" }}
            />
            <input
              type="text"
              name="female_name"
              placeholder="اسم الأنثى"
              className="h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
              style={{ width: "48%" }}
            />
          </div>
        </div>
        <div className="icons w-full flex justify-between h-16 cursor-pointer">
          <img
            src={flower}
            data-icon="flower"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
            onClick={() => setIcons((icons) => [...icons, flower])}
          />
          <img
            src={ring}
            data-icon="ring"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
            onClick={() => setIcons((icons) => [...icons, ring])}
          />
          <img
            src={infinity}
            data-icon="infinity"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
            onClick={() => setIcons((icons) => [...icons, infinity])}
          />
        </div>
        <div className="dates w-full">
          <label htmlFor="date" className="font-semibold">
            أضف تاريخ
          </label>
          <input
            type="date"
            name="date"
            placeholder="التاريخ"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
          />
        </div>
        <button className="w-full h-12 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default React.memo(FrameEditForm);
