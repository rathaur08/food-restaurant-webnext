"use client";
import { useEffect, useState } from "react"
import CustomerHeader from "@/app/_components/CustomerHeader"

const RestaurantDetail = (props) => {
  let name = props.params.name;

  const [restaurantData, setRestaurantData] = useState();
  const [restaurantFoodItemsData, setRestaurantFoodItemsData] = useState([]);
  // console.log("restaurantFoodItemsData", restaurantFoodItemsData)
  // console.log("restaurantData", restaurantData)

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const id = props.searchParams.id;
    let response = await fetch(`http://localhost:3001/api/customer/${id}`)
    response = await response.json();
    if (response.success) {
      setRestaurantData(response.details);
      setRestaurantFoodItemsData(response.fooditems);
    } else {
      alert("Restaurant/FoodItems not loading")
    }
  }

  return (
    <>
      {/* <h1>restaurant-detail</h1>  */}
      <div>
        <CustomerHeader />
        <div className="main-banner">
          <h2 className="text-white">{decodeURI(name)} Restaurant Detail Page </h2>
        </div>
        <div className="card-body-restaurant d-flex justify-content-between flex-wrap">
          <h3>Address  : {restaurantData?.full_address}</h3>
          <h3>City : {restaurantData?.city}</h3>
          <h3>Mobile : {restaurantData?.number}</h3>
          <h3>Email : {restaurantData?.email}</h3>
        </div>
        <div className="mt-3 mb-4">
          <div className="d-flex justify-content-between flex-wrap gap-3">
            {
              restaurantFoodItemsData.length > 0 ? restaurantFoodItemsData.map((item, index) => (
                <div className="card" style={{ width: '18rem' }} key={index}>
                  <img src={item.item_image} className="card-img-top" alt={item.item_name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.item_name}</h5>
                    <p className="card-text">{item.item_description}</p>
                    <p className="card-text">₹ {item.item_price} /- <button className="btn btn-primary">Add to Cart</button></p>
                  </div>
                </div>
              ))
                : <h1>No Food Item added for now</h1>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantDetail