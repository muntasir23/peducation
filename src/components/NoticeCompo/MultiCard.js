import React from "react";
import "./Notice.css";

import DeleteNotice from "../Delete/DeleteNotice";
import { FaFileSignature } from "react-icons/fa";

export default function MultiCard(props) {
  const { files, title, id, createdAt,downloadURL} = props.value;

  return (
    <div className="notice-card">
      <div className="notice-card-image">
        <img src={files[0].downloadURL} alt="" />
      </div>
      <div className="notice-card-details">
        <p>{createdAt.toDate().toDateString()}</p>
        <h1>{title}</h1>
        <div className="notice-card-p">
          <button>
            <DeleteNotice id={id} imgUrl={files.downloadURL} />
          </button>
        </div>
      </div>
    </div>
  );
}
