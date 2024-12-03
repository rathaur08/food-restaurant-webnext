"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = (props) => {
  const [login, setLogin] = useState(true);
  console.log("Order Flag", props);

  return (
    <>
      <CustomerHeader />
      <div>
        <h1>{login ? "User Login" : "User Signup"}</h1>
        {
          login ? <UserLogin redirect={props.searchParams} /> : <UserSignUp redirect={props.searchParams} />
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
