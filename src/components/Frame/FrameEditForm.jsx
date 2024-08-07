import React from "react";
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
  setFrameColor,
  frameColor,
  setNotification,
  notification,
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

  function showNotification() {
    setNotification("تمت اضافة الأيقونة بنجاح");
    const timeout = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }

  return (
    <>
      {notification && (
        <div className="notification w-11/12 h-fit py-4 bg-green-600 absolute top-4 left-1/2 -translate-x-1/2 z-50 rounded-lg flex justify-center items-center text-white font-semibold">
          {notification}
        </div>
      )}
      <section className="edit-frame-form w-screen h-screen max-md:h-dvh absolute top-0 left-0 z-40 flex justify-center items-center">
        <button
          className="close text-white absolute top-4 right-12 max-md:right-4 text-3xl"
          onClick={() => setIsEdit(null)}
        >
          <span>
            <i class="fa-solid fa-xmark"></i>
          </span>
        </button>
        <form
          className="w-1/2 h-fit max-md:w-11/12 maxl-lg:w-3/4 p-4 flex flex-col gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md"
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
          <div className="choose-frame-color w-full h-12 flex font-semibold border border-gray-300 rounded-lg">
            <div
              className={`frame-color gold w-1/3 h-full flex justify-center items-center cursor-pointer duration-200 border-gray-300 ${
                frameColor === "white" ? "bg-blue-400 text-white" : ""
              }`}
              onClick={() => setFrameColor("white")}
            >
              أبيض
            </div>
            <div
              className={`frame-color gold w-1/3 h-full flex justify-center items-center cursor-pointer duration-200 ${
                frameColor === "black" ? "bg-blue-400 text-white" : "border-x"
              }`}
              onClick={() => setFrameColor("black")}
            >
              أسود
            </div>
            <div
              className={`frame-color gold w-1/3 h-full flex justify-center items-center cursor-pointer duration-200 border-gray-300 ${
                frameColor === "gold" ? "bg-blue-400 text-white" : ""
              }`}
              onClick={() => setFrameColor("gold")}
            >
              ذهبي
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
              onClick={() => {
                setIcons((icons) => [...icons, flower]);
                showNotification();
              }}
            />
            <img
              src={ring}
              data-icon="ring"
              className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
              onClick={() => {
                setIcons((icons) => [...icons, ring]);
                showNotification();
              }}
            />
            <img
              src={infinity}
              data-icon="infinity"
              className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
              onClick={() => {
                setIcons((icons) => [...icons, infinity]);
                showNotification();
              }}
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
      </section>
    </>
  );
}

export default React.memo(FrameEditForm);
