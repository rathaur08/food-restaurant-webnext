import { useEffect, useState } from "react";

const FoodItemList = () => {

  const [foodItems, setFoodItems] = useState();
  console.log(foodItems);

  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = async () => {
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
    if (restaurantData) {
      resto_id = restaurantData._id
    }
    let response = await fetch(`http://localhost:3001/api/restaurant/foods/${resto_id}`)
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result)
    } else {
      alert("food item not loading")
    }
  }

  return (
    <>
      <div>
        <h1>Food Item List</h1>
        <div class="table-responsive">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                foodItems && foodItems.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item.item_name}</td>
                    <td>{item.item_price}</td>
                    <td>{item.item_description}</td>
                    <td><img height={38} src={item.item_image} alt={item.item_name} /></td>
                    <td className="d-flex gap-1">
                      <button type="button" className="btn btn-outline-dark">Delete</button>
                      <button type="button" className="btn btn-outline-dark">Edit</button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FoodItemList;
