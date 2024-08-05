import ActionsButtons from "./Frame/ActionsButtons";
import Frame from "./Frame/Frame";

function ProductDesignTool() {
  return (
    <section className="product-design-tool w-screen">
      <div className="container w-fit h-fit m-auto">
        <Frame />
        <ActionsButtons />
      </div>
    </section>
  );
}

export default ProductDesignTool;
