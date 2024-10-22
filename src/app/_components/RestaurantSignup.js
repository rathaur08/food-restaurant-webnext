"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignup = () => {
  const Routs = useRouter();

  // signup Form Data
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    c_password: "",
    res_name: "",
    city: "",
    full_address: "",
    number: "",
  });
  const [error, serError] = useState(false);
  const [passwordError, serPasswordError] = useState(false);

  // console.log("SignupDataObject", signupData);

  // ---------- 1
  const handleChange = (input) => (e) => {
    setSignupData({ ...signupData, [input]: e.target.value });
  };

  const handleSubmit = async () => {
    if (signupData.password !== signupData.c_password) {
      serPasswordError(true);
      return false;
    } else {
      serPasswordError(false);
    }
    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.c_password ||
      !signupData.res_name ||
      !signupData.city ||
      !signupData.full_address ||
      !signupData.number
    ) {
      serError(true);
      return false;
    } else {
      serError(false);
    }
    try {
      const resresult = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
      const response = await resresult.json();
      // console.log("Response received:", res); // Debugging
      if (response.success) {
        const { result } = response;
        delete result.password; // Optional: If you don't want to store the password locally
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        Routs.push("/restaurant/dashboard"); // Navigate to dashboard
      } else {
        console.error("Signup failed: ", response.message); // Handle failure
      }
    } catch (error) {
      console.error("Error submitting signup data:", error); // Handle error
    }
  };

  return (
    <>
      <div className="w-25">
        <h4>Signup Components</h4>
        <form>
          <div className="mb-1">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={signupData.email}
              onChange={handleChange("email")}
            />
            {error && !signupData.email && (
              <span className="text-error">Email not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={signupData.password}
              onChange={handleChange("password")}
            />
            {passwordError && (
              <span className="text-error">
                password and confirm password not match
              </span>
            )}
            {error && !signupData.password && (
              <span className="text-error">password not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={signupData.c_password}
              onChange={handleChange("c_password")}
            />
            {passwordError && (
              <span className="text-error">
                password and confirm password not match
              </span>
            )}
            {error && !signupData.c_password && (
              <span className="text-error">Confirm Password not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Enter Restaurant Name</label>
            <input
              type="text"
              className="form-control"
              value={signupData.res_name}
              onChange={handleChange("res_name")}
            />
            {error && !signupData.res_name && (
              <span className="text-error">Restaurant Name not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={signupData.city}
              onChange={handleChange("city")}
            />
            {error && !signupData.city && (
              <span className="text-error">City not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Full Address</label>
            <input
              type="text"
              className="form-control"
              value={signupData.full_address}
              onChange={handleChange("full_address")}
            />
            {error && !signupData.full_address && (
              <span className="text-error">Full Address not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              value={signupData.number}
              onChange={handleChange("number")}
            />
            {error && !signupData.number && (
              <span className="text-error">number not valid blank</span>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantSignup;
