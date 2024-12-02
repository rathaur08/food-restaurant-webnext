"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader"
import RestaurantFooter from "../_components/RestaurantFooter";
import { DELIVERY_CHARGES, TAX } from "../lib/itemsPricing";
import { useRouter } from "next/navigation";

const CartItem = () => {
  const Routs = useRouter();
  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  // const [total, setTotal] = useState(() => cartStorage.length == 1 ? cartStorage[0].item_price : cartStorage.reduce((a, b) => {
  //   return a + b.item_price, 0
  // }))

  const [total, setTotal] = useState(() => {
    if (cartStorage.length === 1) {
      return cartStorage[0].item_price; // Single item in the cart
    }
    return cartStorage.reduce((a, b) => a + b.item_price, 0); // Provide initial value (0)
  });

  const orderNow = () => {
    Routs.push("/order")
  }

  return (
    <>
      <CustomerHeader />
      <div className="mt-5">
        {
          cartStorage.length > 0 ? cartStorage.map((item, index) => (
            <div className="" key={index}>
              <div className="card border-0 mb-3" style={{ maxWidth: '540px' }} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.item_image} className="img-fluid rounded-start" alt={item.item_name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.item_name}</h5>
                      <p className="card-text text-end fw-bold m-0">Price:  ₹{item.item_price}</p>
                      <p className="card-text ">{item.item_description}</p>
                      <button className="btn btn-primary" onClick={() => removeTOCart(item._id)}>Remove Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
            </div>
          ))
            : <h1>No Food Item added for now</h1>
        }
        <div className="text-end">
          <div>
            <span>Food Charges : </span>
            <span> ₹ {total}</span>
          </div>
          <div>
            <span>Tax : </span>
            <span> ₹ {total * TAX / 100}</span>
          </div>
          <div>
            <span>Delivery Chargess : </span>
            <span> ₹ {DELIVERY_CHARGES} </span>
          </div>
          <div>
            <span>Total Ammounts  : </span>
            <span> ₹ {total + DELIVERY_CHARGES + (total * TAX / 100)}</span>
          </div>
          <div>
            <button className="btn btn-primary mt-2" onClick={orderNow}>Order Now</button>
          </div>
        </div>
      </div>
      <RestaurantFooter />
    </>
  )
}

export default CartItem