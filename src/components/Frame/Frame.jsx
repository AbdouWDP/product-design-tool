import blackFrameLandscape from "../../assets/frames/frame black landscape.png";
import blackFramePortrait from "../../assets/frames/frame black portrait.png";
import whiteFrameLandscape from "../../assets/frames/frame white landscape.png";
import whiteFramePortrait from "../../assets/frames/frame white portrait.png";
import goldFrameLandscape from "../../assets/frames/frame gold landscape.png";
import goldFramePortrait from "../../assets/frames/frame gold portrait.png";
import Quote from "./Quote";
import Names from "./Names";
import Dates from "./Dates";

function Frame({ quotes, setQuotes, names, icons, setIcons, dates, setDates }) {
  return (
    <section
      id="frame"
      className="w-full overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div className="w-full h-full max-md:h-fit m-auto relative">
        <img
          src={blackFramePortrait}
          alt=""
          className="w-full h-full object-contain"
          draggable="false"
        />
        {quotes.length > 0 &&
          quotes.map((quote) => (
            <Quote text={quote} quotes={quotes} setQuotes={setQuotes} />
          ))}
        {names.length > 0 && names.map((name) => <Names name={name} />)}
        {dates.length > 0 ? (
          dates.map((date) => (
            <Dates date={date} dates={dates} setDates={setDates} />
          ))
        ) : (
          <Dates
            date={new Date().toLocaleDateString()}
            dates={dates}
            setDates={setDates}
          />
        )}
      </div>
    </section>
  );
}

export default Frame;
