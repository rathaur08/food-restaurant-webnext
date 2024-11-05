"use client";
import { useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItem from "@/app/_components/AddFoodItem";
import FoodItemList from "@/app/_components/FoodItemList";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(true);
  return (
    //url =  dashboard
    <>
      <RestaurantHeader />
      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={() => setAddItem(true)}>Add Food</button>
        <button className="btn btn-primary" onClick={() => setAddItem(false)}>Dashboard</button>
      </div>
      {addItem ? <AddFoodItem AddItemsupdate={setAddItem} /> : <FoodItemList />}
    </>
  );
};

export default Dashboard;
