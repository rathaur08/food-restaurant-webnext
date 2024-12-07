"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeliveryHeader from "../_components/DeliveryHeader";

const page = () => {
  const Routs = useRouter();

  // Delivery Partner Login  Form Data
  const [deliveryLogin, setDeliveryLogin] = useState({
    db_number: "",
    db_password: "",
  });
  const [error, setError] = useState(false);

  console.log("deliveryLogin DataObj", deliveryLogin);

  // ---------- User Signup Data Handle Input
  const handleChangeLogin = (input) => (e) => {
    setDeliveryLogin({ ...deliveryLogin, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleLogin = async () => {

    // Check if all required fields are filled
    if (
      !deliveryLogin.db_number || !deliveryLogin.db_password
    ) {
      setError(true); // Fixed typo here
      return false;
    } else {
      setError(false);
    }

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/deliverypartners/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deliveryLogin),
      });

      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("delivery Login Successful!");
        const { result } = response;
        ['db_password', 'db_gen_date'].forEach(prop => delete result[prop]);
        localStorage.setItem("delivery", JSON.stringify(result));
        Routs.push("/delivery-dashboard");
      } else {
        console.error("delivery Login failed: ", response.message); // Handle failure
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting delivery Login data:", error); // Handle error
      alert("There was an error with the Login process. Please try again later.");
    }
  };

  // ------------------------------ Delivery Partner SignUp -----------------------------------------------------------------
  // delivery Partner Signup Form 
  // User Signup Form Data
  const [deliverySignUP, setDeliverySignUP] = useState({
    db_fullname: "",
    db_email: "",
    db_number: "",
    db_city: "",
    db_full_address: "",
    db_password: "",
    db_cpassword: "",
  });
  const [passwordError, setPasswordError] = useState(false);

  console.log("deliverySignUP DataObj", deliverySignUP);

  // ---------- User Signup Data Handle Input
  const handleChangeSignup = (input) => (e) => {
    setDeliverySignUP({ ...deliverySignUP, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleSignUp = async () => {

    // Check if passwords match
    if (deliverySignUP.db_password !== deliverySignUP.db_cpassword) {
      setPasswordError(true); // Fixed typo here
      return false;
    } else {
      setPasswordError(false);
    }

    // Check if all required fields are filled
    if (
      !deliverySignUP.db_fullname ||
      !deliverySignUP.db_email ||
      !deliverySignUP.db_number ||
      !deliverySignUP.db_city ||
      !deliverySignUP.db_full_address ||
      !deliverySignUP.db_password
    ) {
      setError(true); // Fixed typo here
      return false;
    } else {
      setError(false);
    }

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/deliverypartners/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deliverySignUP),
      });

      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("delivery Signup Successful!");
        const { result } = response;
        ['db_password', 'db_gen_date'].forEach(prop => delete result[prop]);
        localStorage.setItem("delivery", JSON.stringify(result));
        Routs.push("/delivery-dashboard");
      } else {
        console.error("delivery Signup failed: ", response.message); // Handle failure
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting delivery signup data:", error); // Handle error
      alert("There was an error with the signup process. Please try again later.");
    }
  };

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    if (delivery) {
      Routs.push("/delivery-dashboard");
    }
  }, [])

  return (
    // delivery-partner
    <>
      <DeliveryHeader />
      <div className="mt-4">
        <h1 className="">Delivery Partner</h1>
        <div className='deliverypartner-container'>
          <div className="row">
            <div className="col-lg-5">
              <h2>Login</h2>
              <div className='login border p-3'>
                <div className="">
                  <div className="mb-1">
                    <label className="form-label">Number</label>
                    <input type="text" className="form-control"
                      value={deliveryLogin.db_number}
                      onChange={handleChangeLogin("db_number")} />
                    {error && !deliveryLogin.db_number && (
                      <span className="text-error">Number not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                      value={deliveryLogin.db_password}
                      onChange={handleChangeLogin("db_password")} />
                    {error && !deliveryLogin.db_password && (
                      <span className="text-error">password not blank</span>
                    )}
                  </div>
                  <div className="mt-2">
                    <button type="submit" onClick={handleLogin} className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <h2>Signup</h2>
              <div className='signup border p-3'>
                <div className="">
                  <div className="mb-1">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control"
                      value={deliverySignUP.db_fullname}
                      onChange={handleChangeSignup("db_fullname")} />
                    {error && !deliverySignUP.db_fullname && (
                      <span className="text-error">name not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                      value={deliverySignUP.db_email}
                      onChange={handleChangeSignup("db_email")} />
                    {error && !deliverySignUP.db_email && (
                      <span className="text-error">Email not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Number</label>
                    <input type="text" className="form-control"
                      value={deliverySignUP.db_number}
                      onChange={handleChangeSignup("db_number")} />
                    {error && !deliverySignUP.db_number && (
                      <span className="text-error">Number not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control"
                      value={deliverySignUP.db_city}
                      onChange={handleChangeSignup("db_city")} />
                    {error && !deliverySignUP.db_city && (
                      <span className="text-error">City not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Full Address</label>
                    <input type="text" className="form-control"
                      value={deliverySignUP.db_full_address}
                      onChange={handleChangeSignup("db_full_address")} />
                    {error && !deliverySignUP.db_full_address && (
                      <span className="text-error">full address not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                      value={deliverySignUP.db_password}
                      onChange={handleChangeSignup("db_password")} />
                    {passwordError && (
                      <span className="text-error">
                        password and confirm password not match
                      </span>
                    )}
                    {error && !deliverySignUP.db_password && (
                      <span className="text-error">password not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"
                      value={deliverySignUP.db_cpassword}
                      onChange={handleChangeSignup("db_cpassword")} />
                    {passwordError && (
                      <span className="text-error">
                        password and confirm password not match
                      </span>
                    )}
                    {error && !deliverySignUP.db_cpassword && (
                      <span className="text-error">Confirm Password not blank</span>
                    )}
                  </div>
                  <div className="mt-2">
                    <button type="submit" onClick={handleSignUp} className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page