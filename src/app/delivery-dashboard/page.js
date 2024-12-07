"use client";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import DeliveryHeader from '../_components/DeliveryHeader'

const DeliveryDashboard = () => {
  const Routs = useRouter();

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    if (!delivery) {
      Routs.push("/delivery-partner");
    }
  }, []);

  return (
    // delivery-dashboard
    <>
      <div>
        <DeliveryHeader/>
        <h1>Delivery Dashboard</h1>
      </div>
    </>
  )
}

export default DeliveryDashboard