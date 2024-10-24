import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaRegSadCry } from "react-icons/fa";
import "./Login.css";

export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    //

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
      setUser(true);
      localStorage.setItem('user', JSON.stringify(true));
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <div>
      <div>
        <div className="login-input">
          <p>Email address</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>User Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn-login">
          <button disabled={loading} onClick={handlesubmit}>
            {loading && (
              <>
                <h1>Loading</h1>
              </>
            )}
            {!loading && "Login"}
          </button>
        </div>
        <div>
          {error && (
            <h1 className="errorinput">
              {error}
              <FaRegSadCry />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
