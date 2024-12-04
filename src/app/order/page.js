"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader"
import RestaurantFooter from "../_components/RestaurantFooter";
import { DELIVERY_CHARGES, TAX } from "../lib/itemsPricing";

const Order = () => {

  const userStorageData = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userStorageData ? userStorageData : undefined);

  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  const [total, setTotal] = useState(() => {
    if (cartStorage.length === 1) {
      return cartStorage[0].item_price; // Single item in the cart
    }
    return cartStorage.reduce((a, b) => a + b.item_price, 0); // Provide initial value (0)
  });

  // const [order, setOrder] = useState({
  //   order_user_id: user._id,
  //   order_food_items_id: "",
  //   order_resto_id: "",
  //   order_delivery_boy_id: "674edf1c64df4b5e31a8a843",
  //   order_status: "",
  //   order_total_amount: total + DELIVERY_CHARGES + (total * TAX / 100),
  // })
  // console.log(order);

  const orderNow = async () => {
    let order_user_id = JSON.parse(localStorage.getItem('user'))._id;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let order_food_items_id = cart.map((item) => item._id).toString();
    let order_resto_id = cart[0].resto_id;
    let order_delivery_boy_id = "674edf1c64df4b5e31a8a808";
    let order_status = "confirm";
    let order_total_amount = total + DELIVERY_CHARGES + (total * TAX / 100)

    let collection = {
      order_user_id,
      order_food_items_id,
      order_resto_id,
      order_delivery_boy_id,
      order_status,
      order_total_amount
    }
    console.log(collection)

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(collection),
      });
      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("User Order Successful!");
      } else {
        console.error("User Order failed: ", response.message); // Handle failure
        alert("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting User Order data:", error); // Handle error
      alert("There was an error with the Order process. Please try again later.");
    }
  };

  return (
    <>
      <CustomerHeader />
      <div className="mt-5">
        <div className="">
          <h2>User Details</h2>
          <div>
            <span>Name : </span>
            <span className="fw-bold">{user?.user_fullname}</span>
          </div>
          <div>
            <span>Address : </span>
            <span className="fw-bold">{user?.user_full_address}</span>
          </div>
          <div>
            <span>Mobile : </span>
            <span className="fw-bold">{user?.user_number}</span>
          </div>
        </div>
        <hr />
        <h3>Amount Details</h3>
        <div className="text-end">

          <div>
            <span>Food Charges : </span>
            <span> ₹ {total}</span>
          </div>
          <div>
            <span>Tax : </span>
            <span> ₹ {total * TAX / 100}</span>
          </div>
          <div>
            <span>Delivery Chargess : </span>
            <span> ₹ {DELIVERY_CHARGES} </span>
          </div>
          <div>
            <span>Total Amounts  : </span>
            <span> ₹ {total + DELIVERY_CHARGES + (total * TAX / 100)}</span>
          </div>
          <h3 className="text-start">Payment Method</h3>
          <div>
            <span className="fw-bold">Cash on delivery : </span>
            <span> ₹ {total + DELIVERY_CHARGES + (total * TAX / 100)} </span>
          </div>
          <div>
            <button className="btn btn-primary mt-2" onClick={orderNow}>Place your Order now</button>
          </div>
        </div>
      </div>
      <RestaurantFooter />
    </>
  )
}

export default Order