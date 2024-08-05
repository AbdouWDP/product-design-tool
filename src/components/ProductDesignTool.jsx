import { useState } from "react";
import ActionsButtons from "./Frame/ActionsButtons";
import Frame from "./Frame/Frame";

function ProductDesignTool() {
  const [isEdit, setIsEdit] = useState(null);

  return (
    <>
      {isEdit && (
        <>
          <div
            className="overlay w-screen h-screen absolute top-0 left-0 z-40"
            style={{ background: "rgba(0,0,0,0.9)" }}
            onClick={() => setIsEdit(null)}
          ></div>
          <div className="edit-frame-form w-1/2 h-1/2 bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
            <form
              style={{ width: "95%", height: "95%" }}
              onSubmit={(e) => {
                e.preventDefault();
                setIsEdit(null);
              }}
            >
              <button className="w-40 h-10 bg-blue-500">Submit</button>
            </form>
          </div>
        </>
      )}
      <section className="product-design-tool w-screen max-md:m-auto">
        <div className="container w-fit h-full m-auto">
          <Frame />
          <ActionsButtons setIsEdit={setIsEdit} />
        </div>
      </section>
    </>
  );
}

export default ProductDesignTool;
