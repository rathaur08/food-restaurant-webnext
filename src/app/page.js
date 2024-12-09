"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  // console.log(locations);
  let item;
  useEffect(() => {
    getLoadLocations();
    getRestaurants({ location: item });
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

  const getRestaurants = async (params) => {
    let url = "http://localhost:3001/api/customer";
    if (params?.location) {
      url += "?location=" + params.location;
    } else if (params?.restaurant) {
      // url += "?restaurant=" + params.restaurant;
    }
    let response = await fetch(url)
    response = await response.json();
    if (response.success) {
      setRestaurants(response.result)
    } else {
      alert("Restaurant not loading")
    }
  }

  const handelListItem = (item) => {
    console.log(item);
    getRestaurants({ location: item });
  }

  return (
    <>
      <div>
        <CustomerHeader />
        <div className="main-banner">
          <h2 className="text-white">JetSetGo Food Delivery App</h2>
          <div className="search-wraper d-flex justify-content-center">
            <div className="input-group">
              <input type="text" className="form-control search-select" onClick={() => handelListItem(item)} list="datalistOptions" placeholder="Select Place" />
              <datalist id="datalistOptions">
                {
                  locations?.map((item, index) => (
                    <option key={index} >{item}</option>
                  ))
                }
              </datalist>
              {/* <span className="input-group-text">Sunny</span> */}
              <input type="text" className="form-control search-input" placeholder="Enter food or restaurant name" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-3 mt-4 mb-4">
          {
            restaurants && restaurants.map((item, index) => (
              <div className="card restaurant-card" onClick={() => router.push('/restaurant-detail/' + item.res_name + "?id=" + item._id)} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{item.res_name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">City : {item.city}</h6>
                  <p className="card-text m-0">Email : {item.email}</p>
                  <p className="card-text m-0">Number : {item.number}</p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Full Address : {item.full_address}</h6>
                  {/* <h6 className="card-subtitle mb-2 text-body-secondary">Res Date : {item.res_gen_date}</h6> */}
                </div>
              </div>
            ))
          }
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};

export default page;