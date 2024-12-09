"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader"
import RestaurantFooter from "../_components/RestaurantFooter";
import { DELIVERY_CHARGES, TAX } from "../lib/itemsPricing";
import { useRouter } from "next/navigation";

const Order = () => {
  const Routs = useRouter();

  const userStorageData = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userStorageData ? userStorageData : undefined);

  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  const [total, setTotal] = useState(() => {
    if (cartStorage.length === 1) {
      return cartStorage[0].item_price; // Single item in the cart
    }
    return cartStorage.reduce((a, b) => a + b.item_price, 0); // Provide initial value (0)
  });


  // Initial state setup
  const [deliveryId, setDeliveryId] = useState(null);
  const [orderData, setOrderData] = useState({
    order_user_id: user._id,
    order_food_items_id: cartStorage.map(item => item._id).toString(),
    order_resto_id: cartStorage[0]?.resto_id, // Use optional chaining to avoid errors
    order_delivery_boy_id: null, // Start as null and update later
    order_status: "confirm",
    order_total_amount: total + DELIVERY_CHARGES + (total * TAX / 100),
  });
  // console.log("orderData", orderData);

  useEffect(() => {
    const getDeliveryBoyData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/deliverypartners/${user.user_city}`);
        const data = await response.json();
        const deliveryIds = data.result.map((item) => item._id);

        if (deliveryIds.length) {
          const selectedDeliveryId = deliveryIds[Math.floor(Math.random() * deliveryIds.length)];
          setDeliveryId(selectedDeliveryId);
          // console.log("selectedDeliveryId", selectedDeliveryId);
        } else {
          alert("No delivery boys available");
        }
      } catch (error) {
        console.error("Error fetching delivery boy data:", error);
      }
    };

    if (user.user_city) getDeliveryBoyData();
  }, [user.user_city]); // Trigger when `user.user_city` changes

  useEffect(() => {
    if (deliveryId) {
      // Update `orderData` once `deliveryId` is fetched and set
      setOrderData(prevData => ({
        ...prevData,
        order_delivery_boy_id: deliveryId,
      }));
    }
  }, [deliveryId]); // Trigger when `deliveryId` changes

  useEffect(() => {
    if (!cartStorage) Routs.push("/");
  }, [total]); // Check for cartStorage changes

  const [removeCartData, setRemoveCartData] = useState(false);

  const orderNow = async () => {

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("Order Successful!");
        setRemoveCartData(true);
        Routs.push("my-profile");
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
      <CustomerHeader removeCartData={removeCartData} />
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