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

  const handleAddFoodItem = async () => {
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
    if (restaurantData) {
      resto_id = restaurantData._id
    }
    let resAddFoodItem = { resto_id, ...addItem }
    // console.log("AddFoodItem Data :", resAddFoodItem)

    try {
      const resresult = await fetch("http://localhost:3001/api/restaurant/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resAddFoodItem),
      });
      const response = await resresult.json();
      // console.log("Response received:", res); // Debugging
      if (response.success) {
        alert('Add restaurant food Item Succesfully');
      } else {
        console.error("AddFood failed: ", response.message); // Handle failure
      }
    } catch (error) {
      console.error("Error submitting AddFood data:", error); // Handle error
    }
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