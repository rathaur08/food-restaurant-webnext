"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";

const page = () => {

  const [locations, setLocations] = useState([]);
  const [selectLocations, selSelectLocations] = useState("");

  // console.log(locations);

  useEffect(() => {
    getLoadLocations();
  }, [])

  const getLoadLocations = async () => {
    let response = await fetch(`http://localhost:3001/api/customer/locations`)
    response = await response.json();
    if (response.success) {
      setLocations(response.result)
    } else {
      alert("Location not loading")
    }
  }


  // const handelListItem = (item) => {
  //   // selSelectLocations(item);
  // }
  return (
    <>
      <div>
        <CustomerHeader />
        <div className="main-banner">
          <h2 className="text-white">JetSetGo Food Delivery App</h2>
          <div className="search-wraper d-flex justify-content-center">
            <div className="input-group">
              <input type="text" className="form-control search-select" list="datalistOptions" placeholder="Select Place" />
              <datalist id="datalistOptions">
                {
                  locations?.map((item, index) => (
                    <option key={index} >{item}</option>
                    // <option key={index} onClick={() => handelListItem(item)} value={selectLocations}>{item}</option>
                  ))
                }
              </datalist>
              {/* <span className="input-group-text">Sunny</span> */}
              <input type="text" className="form-control search-input" placeholder="Enter food or restaurant name" />
            </div>
          </div>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};

export default page;