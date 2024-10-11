"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const RestaurantHeader = () => {
  const Routs = useRouter();
  const pathName = usePathname();

  const [details, setDetails] = useState();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      Routs.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      Routs.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  },[]);

  const logOut = () => {
    localStorage.removeItem("restaurantUser");
    Routs.push("/restaurant");
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              JetSetGO
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                {details && details.res_name ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-primary"
                      href="/restaurant"
                      onClick={logOut}
                    >
                      Logout
                    </Link>
                    <Link className="nav-link" href="/restaurant">
                      Profile {details.res_name}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" href="/restaurant">
                      Login/Sinup
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default RestaurantHeader;
