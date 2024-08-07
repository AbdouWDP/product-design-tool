import { useState } from "react";
import Frame from "./Frame/Frame";
import FrameEditForm from "./Frame/FrameEditForm";
import FrameCheckout from "./Frame/FrameCheckout";
import ActionsButtons from "./Frame/ActionsButtons";

function ProductDesignTool() {
  const [isEdit, setIsEdit] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [names, setNames] = useState([]);
  const [icons, setIcons] = useState([]);
  const [dates, setDates] = useState([]);
  const [isPortrait, setIsPortrait] = useState(true);
  const [frameColor, setFrameColor] = useState("black");
  const [notification, setNotification] = useState(null);

  return (
    <>
      {isEdit !== null && (
        <div
          className="overlay w-screen h-screen absolute top-0 left-0 z-40"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setIsEdit(null)}
        ></div>
      )}
      {isEdit && (
        <FrameEditForm
          setIsEdit={setIsEdit}
          setQuotes={setQuotes}
          setNames={setNames}
          setIcons={setIcons}
          setDates={setDates}
          setIsPortrait={setIsPortrait}
          isPortrait={isPortrait}
          setFrameColor={setFrameColor}
          frameColor={frameColor}
          setNotification={setNotification}
          notification={notification}
        />
      )}
      {isEdit == false && <FrameCheckout setIsEdit={setIsEdit} />}
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
            frameColor={frameColor}
          />
          <ActionsButtons setIsEdit={setIsEdit} />
        </div>
      </section>
    </>
  );
}

export default ProductDesignTool;
