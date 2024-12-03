import { useState } from "react";
import { useRouter } from "next/navigation";

const UserLogin = (props) => {
  const Routs = useRouter();

  // User Signup Form Data
  const [userLogin, setUserLogin] = useState({
    user_email: "",
    user_password: "",
  });
  const [error, setError] = useState(false);

  // console.log("userLogin DataObj", userLogin);

  // ---------- User Signup Data Handle Input
  const handleChange = (input) => (e) => {
    setUserLogin({ ...userLogin, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleLogin = async () => {

    // Check if all required fields are filled
    if (
      !userLogin.user_email || !userLogin.user_password
    ) {
      setError(true); // Fixed typo here
      return false;
    } else {
      setError(false);
    }

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("User Login Successful!");
        const { result } = response;
        ['user_password', 'user_gen_date'].forEach(prop => delete result[prop]);
        localStorage.setItem("user", JSON.stringify(result));
        if (props?.redirect?.order) {
          Routs.push("/order")
        } else {
          Routs.push("/")
        }
      } else {
        console.error("User Login failed: ", response.message); // Handle failure
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting User Login data:", error); // Handle error
      alert("There was an error with the Login process. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <div className="w-50">
          <h4>User Login Form</h4>
          <div className="mb-1">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
              value={userLogin.user_email}
              onChange={handleChange("user_email")} />
            {error && !userLogin.user_email && (
              <span className="text-error">Email not blank</span>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              value={userLogin.user_password}
              onChange={handleChange("user_password")} />
            {error && !userLogin.user_password && (
              <span className="text-error">password not blank</span>
            )}
          </div>
          <div className="mt-2">
            <button type="submit" onClick={handleLogin} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogin