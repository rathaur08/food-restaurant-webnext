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
        {/* <h2>Amount Details</h2> */}
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
          <div>
            <span className="fw-bold">Payment Method  : </span>
            <span> HOME</span>
          </div>
          <div>
            <button className="btn btn-primary mt-2">Place your Order now</button>
          </div>
        </div>
      </div>
      <RestaurantFooter />
    </>
  )
}

export default Order