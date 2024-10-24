import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../icons/Btn";
import "./Gallery.css";

export default function HeaderGallery() {
  const navigate = useNavigate();

  const handleAddNotice = () => {
    navigate("/postevents");
  };



  return (
    <div>
      <div className="notice-header-compo">
        <h1>
          You can find all <strong>Events images</strong> here and also can{" "}
          <strong>add more events</strong>
        </h1>
        <Btn className="btn btnnotice">
          <p onClick={handleAddNotice}>Add Events</p>
        </Btn>
      </div>
    </div>
  );
}
