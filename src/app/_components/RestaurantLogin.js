"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantLogin = () => {
  const Routs = useRouter();

  // signup Form Data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, serError] = useState(false);

  // ---------- Login Data Handle Input
  const handleChange = (input) => (e) => {
    setLoginData({ ...loginData, [input]: e.target.value });
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      serError(true);
      return false;
    } else {
      serError(false);
    }
    const resData = { ...loginData, login: true };

    try {
      const resresult = await fetch("http://localhost:3001/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resData),
      });
      const response = await resresult.json();
      // console.log("Response received:", res); // Debugging
      if (response.success) {
        alert('Login Succesfully')
        // console.log(response);
        const { result } = response;
        delete result.password; // Optional: If you don't want to store the password locally
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        Routs.push("/restaurant/dashboard"); // Navigate to dashboard
      } else {
        console.error("Login failed: ", response.message); // Handle failure
      }
    } catch (error) {
      console.error("Error submitting Login data:", error); // Handle error
    }
  };
  return (
    <>
      <div className="w-25">
        <h3>Login Components</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"
              value={loginData.email}
              onChange={handleChange("email")} />
            {error && !loginData.email && (
              <span className="text-error">pls enter valid Email</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              value={loginData.password}
              onChange={handleChange("password")} />
            {error && !loginData.password && (
              <span className="text-error">pls enter valid password</span>
            )}
          </div>
          <button type="submit" onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantLogin;
