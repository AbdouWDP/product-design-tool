import React from "react";
import * as htmlToImage from "html-to-image";

function FrameCheckout() {
  function submitHandler(e) {
    e.preventDefault();
    htmlToImage
      .toJpeg(document.getElementById("frame"))
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => alert(err.message));
  }

  return (
    <section className="frame-checkout w-1/2 h-fit py-4 rounded-md max-md:w-11/12 max-lg:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
      <form
        style={{ width: "95%", height: "95%" }}
        className="flex flex-col gap-2"
        dir="rtl"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="w-full">
          <label htmlFor="name" className="font-semibold">
            الاسم و اللقب
          </label>
          <input
            type="text"
            name="name"
            placeholder="الاسم و اللقب"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
          />
        </div>
        <div className="w-full">
          <label htmlFor="phone" className="font-semibold">
            رقم الهاتف
          </label>
          <input
            type="number"
            name="phone"
            placeholder="رقم الهاتف"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 outline-none focus:ring-2 focus:ring-blue-400 duration-200"
          />
        </div>
        <div className="select-wilaya">
          <label htmlFor="wilaya" className="font-semibold">
            الولاية
          </label>
          <select
            name="wilaya"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2"
          >
            <option value="Alger">Alger</option>
            <option value="Adrar">Adrar</option>
          </select>
        </div>
        <div className="select-wilaya">
          <label htmlFor="commune" className="font-semibold">
            البلدية
          </label>
          <select
            name="wilaya"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 capitalize"
          >
            <option value="bab ezzouar">bab ezzouar</option>
            <option value="el harrach">el harrach</option>
          </select>
        </div>
        <div className="select-color">
          <label htmlFor="color" className="font-semibold">
            لون الاطار
          </label>
          <select
            name="color"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 capitalize"
          >
            <option value="black">أسود</option>
            <option value="white">أبيض</option>
            <option value="gold">ذهبي</option>
          </select>
        </div>
        <div className="select-dimension">
          <label htmlFor="dimension" className="font-semibold">
            الأبعاد
          </label>
          <select
            name="dimension"
            className="w-full h-12 bg-white border border-gray-300 rounded-lg px-2 capitalize"
          >
            <option value="a4">a4</option>
            <option value="a3">a3</option>
            <option value="25 x 30">25 * 30</option>
            <option value="30 x 40">30 * 40</option>
          </select>
        </div>
        <button className="w-full h-12 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
}

export default React.memo(FrameCheckout);
