import { useState } from "react";
import ActionsButtons from "./Frame/ActionsButtons";
import Frame from "./Frame/Frame";
import FrameEditForm from "./Frame/FrameEditForm";

function ProductDesignTool() {
  const [isEdit, setIsEdit] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [names, setNames] = useState(["اسم الذكر", "اسم الأنثى"]);
  const [icons, setIcons] = useState(["flower"]);
  const [dates, setDates] = useState([]);
  const [isPortrait, setIsPortrait] = useState(true);

  return (
    <>
      {isEdit && (
        <>
          <div
            className="overlay w-screen h-screen absolute top-0 left-0 z-40"
            style={{ background: "rgba(0,0,0,0.9)" }}
            onClick={() => setIsEdit(null)}
          ></div>
          <FrameEditForm
            setIsEdit={setIsEdit}
            setQuotes={setQuotes}
            setNames={setNames}
            setIcons={setIcons}
            setDates={setDates}
            setIsPortrait={setIsPortrait}
          />
        </>
      )}
      <section className="product-design-tool w-screen max-md:m-auto">
        <div className="container w-fit h-full m-auto">
          <Frame
            quotes={quotes}
            setQuotes={setQuotes}
            names={names}
            setNames={setNames}
            icons={icons}
            setIcons={setIcons}
            dates={dates}
            setDates={setDates}
            isPortrait={isPortrait}
          />
          <ActionsButtons setIsEdit={setIsEdit} />
        </div>
      </section>
    </>
  );
}

export default ProductDesignTool;
