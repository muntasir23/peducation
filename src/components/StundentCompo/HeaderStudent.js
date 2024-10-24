import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../icons/Btn";
import "./Student.css";

export default function HeaderStudent() {
  const navigate = useNavigate();

  const handleAddNotice = () => {
    navigate("/poststudents");
  };

  return (
    <div>
      <div className="notice-header-compo">
        <h1>
          You can find all <strong>Student details</strong> here and also can{" "}
          <strong>add Student</strong>
        </h1>
        <Btn className="btn btnnotice">
          <p onClick={handleAddNotice}>Add Student</p>
        </Btn>
      </div>
    </div>
  );
}
