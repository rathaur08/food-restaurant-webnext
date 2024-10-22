"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="">
        <RestaurantHeader />
        <h1 className="text-center">JetSetGo Restaurant Signup/Login</h1>
        <div className="d-flex justify-content-center">
          {login ? <RestaurantLogin /> : <RestaurantSignup />}
        </div>
        <div className="text-center">
          <button className="btn btn-link" onClick={() => setLogin(!login)}>
            {login ? "Do not have an account? Signup" : "Already have an account? Login"}
          </button>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};

export default Restaurant;
