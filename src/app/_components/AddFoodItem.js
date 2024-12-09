import { useState } from "react";

const AddFoodItem = (props) => {

  // signup Form Data
  const [addItem, setAddItem] = useState({
    item_name: "",
    item_price: "",
    item_image: "",
    item_description: "",
  });
  const [error, setError] = useState(false);

  // ---------- Login Data Handle Input
  const handleChange = (input) => (e) => {
    setAddItem({ ...addItem, [input]: e.target.value });
  };

  const handleAddFoodItem = async () => {
    if (!addItem.item_name || !addItem.item_price || !addItem.item_image || !addItem.item_description) {
      setError(true);
      return false
    } else {
      setError(false);
    }

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
        props.AddItemsupdate(false);
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
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Item name"
            value={addItem.item_name}
            onChange={handleChange("item_name")}
          />
          {error && !addItem.item_name && (
            <span className="text-error">pls enter valid Name</span>
          )}
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Item Price"
            value={addItem.item_price}
            onChange={handleChange("item_price")}
          />
          {error && !addItem.item_price && (
            <span className="text-error">pls enter valid Name</span>
          )}
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Enter Item Image URL/Path"
            value={addItem.item_image}
            onChange={handleChange("item_image")}
          />
          {error && !addItem.item_image && (
            <span className="text-error">pls enter valid Name</span>
          )}
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Item Description"
            value={addItem.item_description}
            onChange={handleChange("item_description")}
          />
          {error && !addItem.item_description && (
            <span className="text-error">pls enter valid Name</span>
          )}
        </div>
        <button type="submit" onClick={handleAddFoodItem} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  )
}

export default AddFoodItem