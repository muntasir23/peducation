import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../icons/Btn";
import "./Notice.css";

export default function HeaderNotice() {
  const navigate = useNavigate();

  const handleAddNotice = () => {
    navigate("/postnotice");
  };

  return (
    <div>
      <div className="notice-header-compo">
        <h1>
          You can find all <strong>Notice</strong> here and also can{" "}
          <strong>add notice</strong>
        </h1>
        <Btn className="gallery-header-btn">
          <p onClick={handleAddNotice}>Add Notice</p>
        </Btn>
      </div>
    </div>
  );
}
