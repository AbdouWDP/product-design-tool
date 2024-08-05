import Frame from "./Frame/Frame";

function ProductDesignTool() {
  return (
    <section className="product-design-tool w-screen">
      <div className="container w-fit m-auto">
        <Frame />
        <div
          className="actions-buttons w-full flex justify-between items-center"
          style={{ height: "10vh" }}
        >
          <div className="edit-frame-button h-14" style={{ width: "48%" }}>
            <button className="w-full h-full rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold">
              تعديل الاطار
            </button>
          </div>
          <div className="*checkout-button h-14" style={{ width: "48%" }}>
            <button className="w-full h-full rounded-md bg-green-500 hover:bg-green-500 text-white font-semibold">
              تأكيد الطلبية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesignTool;
