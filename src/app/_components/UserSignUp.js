import { useState } from "react";
import { useRouter } from "next/navigation";

const UserSignUp = () => {
  const Routs = useRouter();

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
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // console.log("UserSignup DataObj", userSignUP);

  // ---------- User Signup Data Handle Input
  const handleChange = (input) => (e) => {
    setUserSignUP({ ...userSignUP, [input]: e.target.value });
  };

  // const handleSubmit = async () => {
  const handleSignUp = async () => {

    // Check if passwords match
    if (userSignUP.user_password !== userSignUP.user_cpassword) {
      setPasswordError(true); // Fixed typo here
      return false;
    } else {
      setPasswordError(false);
    }

    // Check if all required fields are filled
    if (
      !userSignUP.user_fullname ||
      !userSignUP.user_email ||
      !userSignUP.user_number ||
      !userSignUP.user_city ||
      !userSignUP.user_full_address ||
      !userSignUP.user_password
    ) {
      setError(true); // Fixed typo here
      return false;
    } else {
      setError(false);
    }

    // Attempt to send the data to the server
    try {
      const resresult = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userSignUP),
      });

      const response = await resresult.json();

      // Handle success or failure based on the response
      if (response.success) {
        alert("User Signup Successful!");
        const { result } = response;
        ['user_password', 'user_gen_date'].forEach(prop => delete result[prop]);
        localStorage.setItem("user", JSON.stringify(result));
        Routs.push("/")
      } else {
        console.error("User Signup failed: ", response.message); // Handle failure
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting User signup data:", error); // Handle error
      alert("There was an error with the signup process. Please try again later.");
    }
  };


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
    </>
  )
}

export default UserSignUp