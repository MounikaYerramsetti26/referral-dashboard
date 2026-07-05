import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Login = () => {
  const token = Cookies.get("jwt_token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
        {
          email,
          password,
        }
      );

      Cookies.set("jwt_token", response.data.data.token);

      window.location.replace("/");
    } catch (err) {
  console.log("Full Error:", err);
  console.log("Response:", err.response);
  console.log(JSON.stringify(err.response?.data, null, 2));

  setError(
    err.response?.data?.message || "Something went wrong"
  );
}
  };

  return (
    <div className="login-container">

      <form onSubmit={onSubmit}>

        <h1>Go Business</h1>

        <p>Sign in to open your referral dashboard.</p>

        <label>Email</label>

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Sign In
        </button>

        <p>{error}</p>

      </form>

    </div>
  );
};

export default Login;