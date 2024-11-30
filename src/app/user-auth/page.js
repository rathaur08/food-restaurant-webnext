"use client";
import CustomerHeader from "../_components/CustomerHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = () => {
  return (
    <>
      <CustomerHeader />
      <div>
        <h1>User</h1>
        <UserSignUp />
      </div>
      <RestaurantFooter />
    </>
  );
};

export default UserAuth;
