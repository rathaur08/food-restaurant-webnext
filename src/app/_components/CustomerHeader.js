"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const CustomerHeader = (props) => {
  const Routs = useRouter();


  // State hooks to store the user and cart data
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(undefined); // Default state set to undefined

  useEffect(() => {
    // Make sure the code runs only on the client-side after the component mounts
    if (typeof window !== 'undefined') {
      // Safely access localStorage on the client-side
      const userStorageData = JSON.parse(localStorage.getItem('user'));
      const cartStorageData = JSON.parse(localStorage.getItem('cart'));

      // Set the state with data from localStorage, if available
      if (userStorageData) {
        setUser(userStorageData);
      }

      if (cartStorageData) {
        setCartItem(cartStorageData);
        setCartNumber(cartStorageData.length); // Set the number of items in the cart
      }
    }
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts


  // const userStorageData = JSON.parse(localStorage.getItem('user'));
  // const cartStorageData = JSON.parse(localStorage.getItem('cart'));
  // const [cartNumber, setCartNumber] = useState(cartStorageData?.length);
  // const [cartItem, setCartItem] = useState(cartStorageData);
  // const [user, setUser] = useState(userStorageData ? userStorageData : undefined)

  useEffect(() => {
    if (props.cartData) {
      console.log(props);
      if (cartNumber) {
        if (cartItem[0].resto_id != props.cartData.resto_id) {
          localStorage.removeItem('cart');
          setCartNumber(1);
          setCartItem([props.cartData]);
          localStorage.setItem('cart', JSON.stringify([props.cartData]));
        } else {
          let localCartItem = cartItem;
          localCartItem.push(JSON.parse(JSON.stringify(props.cartData)))
          setCartItem(localCartItem);
          setCartNumber(cartNumber + 1);
          localStorage.setItem('cart', JSON.stringify(localCartItem))
        }
      } else {
        setCartNumber(1);
        setCartItem([props.cartData]);
        localStorage.setItem('cart', JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData])

  useEffect(() => {
    if (props.removeCardData) {
      let localCartItem = cartItem.filter((item) => {
        return item._id != props.removeCardData
      });

      setCartItem(localCartItem);
      setCartNumber(cartNumber - 1);
      localStorage.setItem('cart', JSON.stringify(localCartItem))
      if (localCartItem.length == 0) {
        localStorage.removeItem('cart')
      }

    }
  }, [props.removeCardData]);

  useEffect(() => {
    if (props.removeCartData) {
      setCartItem([]);
      localStorage.removeItem("cart");
    }

  }, [props.removeCartData]);

  const userLogOut = () => {
    localStorage.removeItem("user");
    Routs.push("/user-auth");
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              JetSetGo Customer
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                {
                  user ?
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="/my-profile">{user.user_fullname}</Link>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" href="/" onClick={userLogOut}>Logout</button>
                      </li>
                    </>
                    :
                    <>
                      {/* <li className="nav-item">
                        <Link className="nav-link" href="/login">Login</Link>
                      </li> */}
                      <li className="nav-item">
                        <Link className="nav-link" href="/user-auth">Login/Signup</Link>
                      </li>
                    </>
                }

                <li className="nav-item">
                  <Link className="nav-link" href={cartNumber ? "/cart-items" : "#"} >Cart Item({cartNumber ? cartNumber : '0'})</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/restaurant">Add restaurant</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/delivery-partner">Delivery Partner</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default CustomerHeader