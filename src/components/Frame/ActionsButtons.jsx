import React from "react";

function ActionsButtons({ setIsEdit }) {
  return (
    <section
      className="actions-buttons w-full flex justify-between items-center"
      style={{ height: "10vh" }}
    >
      <div className="edit-frame-button h-14" style={{ width: "48%" }}>
        <button
          className="w-full h-full rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          onClick={() => setIsEdit(true)}
        >
          تعديل الاطار
        </button>
      </div>
      <div className="checkout-button h-14" style={{ width: "48%" }}>
        <button
          className="w-full h-full rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold"
          onClick={() => setIsEdit(false)}
        >
          تأكيد الطلبية
        </button>
      </div>
    </section>
  );
}

export default React.memo(ActionsButtons);
