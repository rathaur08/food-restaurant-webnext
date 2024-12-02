"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <CustomerHeader />
      <div>
        <h1>{login ? "User Login" : "User Signup"}</h1>
        {
          login ? <UserLogin /> : <UserSignUp />
        }
        {
          login ? <>
            <p> Do not have account?
              <button className="btn btn-link" onClick={() => setLogin(!login)}>Signup</button>
            </p>
          </> :
            <p> Already have account?
              <button className="btn btn-link" onClick={() => setLogin(!login)}>Login</button>
            </p>
        }
      </div>
      <RestaurantFooter />
    </>
  );
};

export default UserAuth;
