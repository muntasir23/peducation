import React from "react";
import "./Icon.css";

export default function Btn({ children }) {
  return (
    <button className="btn">
      {children}
    </button>
  );
}
