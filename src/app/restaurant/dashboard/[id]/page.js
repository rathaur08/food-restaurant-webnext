"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const EditFoodItem = (props) => {
  const router = useRouter();

  // console.log(props.params.id)

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

  useEffect(() => {
    handleFoodItems();
  }, []);

  const handleFoodItems = async () => {
    let response = await fetch(`http://localhost:3001/api/restaurant/foods/edit/${props.params.id}`)
    response = await response.json();
    if (response.success) {
      console.log(response);
      setAddItem(response.result)
    } else {
      alert("food item not loading")
    }
  }

  const handleEditFoodItem = async () => {
    if (!addItem.item_name || !addItem.item_price || !addItem.item_image || !addItem.item_description) {
      setError(true);
      return false
    } else {
      setError(false);
    }

    let resAddFoodItem = addItem;
    console.log("Updated Food Item Data :", resAddFoodItem)
    try {
      const resresult = await fetch(`http://localhost:3001/api/restaurant/foods/edit/${props.params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addItem),
      });
      const response = await resresult.json();
      // console.log("Response received:", res); // Debugging
      if (response.success) {
        // alert('Update restaurant food Item Succesfully');
        router.push(`../dashboard/`)
      } else {
        console.error("Update Food failed: ", response.message); // Handle failure
      }
    } catch (error) {
      console.error("Error submitting UpdateFood data:", error); // Handle error
    }
  };


  return (
    <>
      <div className="w-50">
        <h2> Update Food Item</h2>
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
        <button type="submit" onClick={handleEditFoodItem} className="btn btn-primary">
          Submit
        </button>
        <br />
        <button type="button" className="btn btn-link mt-3" onClick={() => router.push(`../dashboard/`)}>Back to Dashboard</button>
      </div>
    </>
  )
}

export default EditFoodItem