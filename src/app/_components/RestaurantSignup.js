'use client'
import { useState } from "react";

const RestaurantSignup = () => {

  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    c_password: '',
    res_name: '',
    city: '',
    full_address: '',
    number: '',
  });
  // console.log("SignupDataObject", signupData)

  // ---------- 1
  const handleChange = (input) => (e) => {
    setSignupData({ ...signupData, [input]: e.target.value });
  };

  const handleSignup = () => {
    console.log(" Signup Data", signupData)
  }

  return (
    <>
      <div className="w-25">
        <h4>Signup Components</h4>
        <form>
          <div className="mb-1">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={signupData.email} onChange={handleChange('email')} />
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" autoComplete="current-password" value={signupData.password} onChange={handleChange('password')} />
          </div>
          <div className="mb-1">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" autoComplete="current-password" value={signupData.c_password} onChange={handleChange('c_password')} />
          </div>
          <div className="mb-1">
            <label className="form-label">Enter Restaurant Name</label>
            <input type="text" className="form-control" value={signupData.res_name} onChange={handleChange('res_name')} />
          </div>
          <div className="mb-1">
            <label className="form-label">City</label>
            <input type="text" className="form-control" value={signupData.city} onChange={handleChange('city')} />
          </div>
          <div className="mb-1">
            <label className="form-label">Full Address</label>
            <input type="text" className="form-control" value={signupData.full_address} onChange={handleChange('full_address')} />
          </div>
          <div className="mb-1">
            <label className="form-label">Contact Number</label>
            <input type="text" className="form-control" value={signupData.number} onChange={handleChange('number')} />
          </div>
          <button type="submit" onClick={handleSignup} className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantSignup;
