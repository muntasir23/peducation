import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function sidebar({ openSidebar, open, close }) {
  return (
    <aside id="sidebar" className={openSidebar ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">MARCOM</div>
        <span className="icon icon_icon" onClick={open}>
          <AiFillCloseCircle />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/notice" onClick={close}>
            Notice
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/gallery" onClick={close}>
            Gallery
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/students" onClick={close}>
            Students
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/allumni" onClick={close}>
            Allumni
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/routine" onClick={close}>
            Routine
          </Link>
        </li>
      </ul>
    </aside>
  );
}
