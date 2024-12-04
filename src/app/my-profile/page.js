"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader"
import RestaurantFooter from "../_components/RestaurantFooter";

const MyProfile = () => {


  const [myOrderData, setMyOrderData] = useState([]);
  console.log(myOrderData);

  const getMYOrders = async () => {
    const userID = JSON.parse(localStorage.getItem('user'));
    let response = await fetch(`http://localhost:3001/api/order?id=${userID._id}`)
    response = await response.json();
    if (response.success) {
      setMyOrderData(response.result)
    } else {
      alert("Location not loading")
    }
  }

  useEffect(() => {
    getMYOrders();
  }, []);


  return (
    // my-profile
    <>
      <div>
        <CustomerHeader />
        <div>
          <h2>My Orders Details</h2>
          <div className="d-flex flex-wrap justify-content-between gap-3 mt-4 mb-4">
            {
              myOrderData && myOrderData.map((item, index) => (
                <div className="card restaurant-card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{item.data.res_name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">City : {item.data.city}</h6>
                    <p className="card-text m-0">Email : {item.data.email}</p>
                    <p className="card-text m-0">Number : {item.data.number}</p>
                    <p className="card-text m-0">Amount : {item.order_total_amount}</p>
                    <p className="card-text m-0">Status : {item.order_status}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Full Address : {item.data.full_address}</h6>
                  </div >
                </div >
              ))
            }
          </div>
        </div>
        <RestaurantFooter />
      </div>
    </>
  )
}

export default MyProfile


