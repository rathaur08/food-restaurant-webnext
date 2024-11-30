import { useState } from "react";

const UserSignUp = () => {
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

  // console.log("UserSignup DataObj", userSignUP);

  // ---------- User Signup Data Handle Input
  const handleChange = (input) => (e) => {
    setUserSignUP({ ...userSignUP, [input]: e.target.value });
  };


  const handelSignUp = () => {
    console.log("UserSignup DataObj", userSignUP);
  }

  return (
    <>
      <div>
        <div className="w-50">
          <h4>User SignUp Form</h4>
          <div className="mb-1">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control"
              value={userSignUP.user_fullname}
              onChange={handleChange("user_fullname")} />
          </div>
          <div className="mb-1">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
              value={userSignUP.user_email}
              onChange={handleChange("user_email")} />
          </div>
          <div className="mb-1">
            <label className="form-label">Number</label>
            <input type="text" className="form-control"
              value={userSignUP.user_number}
              onChange={handleChange("user_number")} />
          </div>
          <div className="mb-1">
            <label className="form-label">City</label>
            <input type="text" className="form-control"
              value={userSignUP.user_city}
              onChange={handleChange("user_city")} />
          </div>
          <div className="mb-1">
            <label className="form-label">Full Address</label>
            <input type="text" className="form-control"
              value={userSignUP.user_full_address}
              onChange={handleChange("user_full_address")} />
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              value={userSignUP.user_password}
              onChange={handleChange("user_password")} />
          </div>
          <div className="mb-1">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control"
              value={userSignUP.user_cpassword}
              onChange={handleChange("user_cpassword")} />
          </div>
          <div className="mt-2">
            <button type="submit" onClick={handelSignUp} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSignUp