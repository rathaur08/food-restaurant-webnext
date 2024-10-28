"use client";
import { useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItem from "@/app/_components/AddFoodItem";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false)
  return (
    //url =  dashboard
    <>
      <RestaurantHeader />
      <div className="d-flex  gap-2">
        <button className="btn btn-primary" onClick={() => setAddItem(true)}>Add Food</button>
        <button className="btn btn-primary" onClick={() => setAddItem(false)}>Dashboard</button>
      </div>
      {
        addItem ? <AddFoodItem /> : <h1 className="mb-3"> Welcome to Dashboard JetSetGO</h1>
      }
    </>
  );
};

export default Dashboard;
