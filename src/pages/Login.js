import React from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import LoginForm from "../components/LoginCompo/LoginForm";

export default function Login({ setUser }) {
  return (
    <div className="login-container" >
      <div className="login">
        <div className="login-circle">
          <RiAccountPinCircleLine />
        </div>
        <LoginForm setUser={setUser} />
      </div>
    </div>
  );
}
