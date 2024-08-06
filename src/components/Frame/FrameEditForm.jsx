import flower from "../../assets/flower.png";
import infinity from "../../assets/infinity.png";
import ring from "../../assets/ring.png";

function FrameEditForm({ setIsEdit, setQuotes, setNames, setIcons, setDates }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const quote = e.target.quote.value;
    const male_name = e.target.male_name.value;
    const female_name = e.target.female_name.value;
    const date = e.target.date.value;
    setQuotes((quotes) => [...quotes, quote]);
    setNames([male_name, female_name]);
    setDates((dates) => [...dates, date]);
    setIsEdit(null);
  };

  return (
    <div className="edit-frame-form w-1/2 h-fit py-4 rounded-md max-md:w-11/12 max-lg:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
      <form
        style={{ width: "95%", height: "95%" }}
        className="flex flex-col gap-2"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="select-quote" dir="rtl">
          <label htmlFor="quote" className="font-semibold">
            اختر عبارة
          </label>
          <select
            name="quote"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2"
            required
          >
            <option value="و خلقناكم أزواجا">و خلقناكم أزواجا</option>
            <option value="Hello World">Hello World</option>
          </select>
        </div>
        <div className="names flex flex-col" dir="rtl">
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
              required
            />
            <input
              type="text"
              name="female_name"
              placeholder="اسم الأنثى"
              className="h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
              style={{ width: "48%" }}
              required
            />
          </div>
        </div>
        <div className="icons w-full flex justify-between h-16 cursor-pointer">
          <img
            src={flower}
            data-type="flower"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
          />
          <img
            src={ring}
            data-type="ring"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
          />
          <img
            src={infinity}
            data-type="infinity"
            className="w-1/3 h-full object-contain active:ring-2 active:ring-blue-400 duration-200"
          />
        </div>
        <div className="dates w-full" dir="rtl">
          <label htmlFor="date" className="font-semibold">
            أضف تاريخ
          </label>
          <input
            type="date"
            name="date"
            placeholder="التاريخ"
            required
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

export default FrameEditForm;
