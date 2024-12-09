import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const DeliveryHeader = () => {
  const Routs = useRouter();

  const [deliveryUser, setDeliveryUser] = useState(undefined) // Default state set to undefined

  useEffect(() => {
    // Make sure the code runs only on the client-side after the component mounts
    if (typeof window !== 'undefined') {
      // Safely access localStorage on the client-side
      const deliveryUserData = JSON.parse(localStorage.getItem('delivery'));

      // Set the state with data from localStorage, if available
      if (deliveryUserData) {
        setDeliveryUser(deliveryUserData);
      }
    }
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  const userLogOut = () => {
    localStorage.removeItem("delivery");
    Routs.push("/delivery-partner");
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">JetSetGo Delivery</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                {
                  deliveryUser ?
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">{deliveryUser.db_fullname}</Link>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" href="/" onClick={userLogOut}>Logout</button>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="/delivery-partner">Login/Signup</Link>
                      </li>
                    </>
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default DeliveryHeader