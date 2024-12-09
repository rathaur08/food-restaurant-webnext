"use client";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import DeliveryHeader from '../_components/DeliveryHeader'
import RestaurantFooter from '../_components/RestaurantFooter';

const DeliveryDashboard = () => {
  const Routs = useRouter();

  const [myOrderData, setMyOrderData] = useState([]);
  // console.log(myOrderData);

  const getMYOrders = async () => {
    const deliveryData = JSON.parse(localStorage.getItem('delivery'));

    // Check if deliveryData is null or doesn't contain the expected _id
    if (!deliveryData || !deliveryData._id) {
      // alert('Delivery data is not available or invalid.');
      Routs.push("/delivery-partner");
      return;
    }

    try {
      let response = await fetch(`http://localhost:3001/api/deliverypartners/orders/${deliveryData._id}`);
      response = await response.json();

      if (response.success) {
        setMyOrderData(response.result);
      } else {
        alert("Response not loading");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    }
  };


  useEffect(() => {
    getMYOrders();
  }, []);

  // Check if delivery is null to GO Login Page
  // useEffect(() => {
  //   const delivery = JSON.parse(localStorage.getItem('delivery'));
  //   if (!delivery) {
  //     Routs.push("/delivery-partner");
  //   }
  // }, []);

  return (
    // delivery-dashboard
    <>
      <div>
        <DeliveryHeader />
        <h1>Delivery Dashboard</h1>
        <div>
          <h2>My Order List</h2>
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
                    <div className="d-flex align-items-center mb-2" >
                      <p className="card-text m-0 w-100">Update Status :</p>
                      <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="">Select Status</option>
                        <option value="Confirm">Confirm</option>
                        <option value="On the way">On the way</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Failed to delivery">Failed to delivery</option>
                      </select>
                    </div>
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

export default DeliveryDashboard