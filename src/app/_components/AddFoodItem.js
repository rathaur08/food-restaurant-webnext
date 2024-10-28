import { useState } from "react";

const AddFoodItem = () => {

  // signup Form Data
  const [addItem, setAddItem] = useState({
    item_name: "",
    item_price: "",
    item_path: "",
    item_description: "",
  });

  // ---------- Login Data Handle Input
  const handleChange = (input) => (e) => {
    setAddItem({ ...addItem, [input]: e.target.value });
  };

  const handleAddFoodItem = () => {
    console.log("AddFoodItem :", addItem)
    debugger
  };

  return (
    <>
      <div className="w-50">
        <h2> Add New Food Item</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input type="text" className="form-control"
              value={addItem.item_name}
              onChange={handleChange("item_name")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control"
              value={addItem.item_price}
              onChange={handleChange("item_price")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Path</label>
            <input type="text" className="form-control"
              value={addItem.item_path}
              onChange={handleChange("item_path")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control"
              value={addItem.item_description}
              onChange={handleChange("item_description")}
            />
          </div>
          <button type="submit" onClick={handleAddFoodItem} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default AddFoodItem