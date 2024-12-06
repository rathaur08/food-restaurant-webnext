"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const Routs = useRouter();

  // Delivery Partner Login  Form Data
  const [deliveryLogin, setDeliveryLogin] = useState({
    db_number: "",
    db_password: "",
  });
  const [error, setError] = useState(false);

  // console.log("deliveryLogin DataObj", deliveryLogin);

  // ---------- User Signup Data Handle Input
  const handleChange = (input) => (e) => {
    setDeliveryLogin({ ...deliveryLogin, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleLogin = async () => {
  }

  // ------------------------------ Delivery Partner Signup -----------------------------------------------------------------
  // delivery Partner Signup Form 
  // User Signup Form Data
  const [userSignUP, setUserSignUP] = useState({
    user_fullname: "",
    user_email: "",
    user_number: "",
    user_city: "",
    user_full_address: "",
    user_password: "",
    user_cpassword: "",
  });
  const [passwordError, setPasswordError] = useState(false);

  // console.log("UserSignup DataObj", userSignUP);

  // ---------- User Signup Data Handle Input
  const handleChanges = (input) => (e) => {
    setUserSignUP({ ...userSignUP, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleSignUp = async () => {
  }



  return (
    // delivery-partner
    <>
      <div className="mt-4">
        <h1 className="">Delivery Partner</h1>
        <div className='deliverypartner-container'>
          <div className="row">
            <div className="col-lg-5">
              <h2>Login</h2>
              <div className='login border p-3'>
                <div className="">
                  <div className="mb-1">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                      value={deliveryLogin.user_email}
                      onChange={handleChange("user_email")} />
                    {error && !deliveryLogin.user_email && (
                      <span className="text-error">Email not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                      value={deliveryLogin.user_password}
                      onChange={handleChange("user_password")} />
                    {error && !deliveryLogin.user_password && (
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
                      value={userSignUP.user_fullname}
                      onChange={handleChange("user_fullname")} />
                    {error && !userSignUP.user_fullname && (
                      <span className="text-error">name not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                      value={userSignUP.user_email}
                      onChange={handleChange("user_email")} />
                    {error && !userSignUP.user_email && (
                      <span className="text-error">Email not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Number</label>
                    <input type="text" className="form-control"
                      value={userSignUP.user_number}
                      onChange={handleChange("user_number")} />
                    {error && !userSignUP.user_number && (
                      <span className="text-error">Number not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control"
                      value={userSignUP.user_city}
                      onChange={handleChange("user_city")} />
                    {error && !userSignUP.user_city && (
                      <span className="text-error">City not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Full Address</label>
                    <input type="text" className="form-control"
                      value={userSignUP.user_full_address}
                      onChange={handleChange("user_full_address")} />
                    {error && !userSignUP.user_full_address && (
                      <span className="text-error">full address not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                      value={userSignUP.user_password}
                      onChange={handleChange("user_password")} />
                    {passwordError && (
                      <span className="text-error">
                        password and confirm password not match
                      </span>
                    )}
                    {error && !userSignUP.user_password && (
                      <span className="text-error">password not blank</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"
                      value={userSignUP.user_cpassword}
                      onChange={handleChange("user_cpassword")} />
                    {passwordError && (
                      <span className="text-error">
                        password and confirm password not match
                      </span>
                    )}
                    {error && !userSignUP.user_cpassword && (
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