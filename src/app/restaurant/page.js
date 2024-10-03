"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";

const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="">
        <h1 className="text-center">JetSetGo Restaurant Signup/Login</h1>
        <div className="d-flex justify-content-center">
          {login ? <RestaurantLogin /> : <RestaurantSignup />}
        </div>
        <div className="text-center">
          <button className="btn btn-link" onClick={() => setLogin(!login)}>
            {login
              ? "Do not have account ? Signup"
              : "Already have Account ? Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
