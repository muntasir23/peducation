import React from "react";
import "./Notice.css";

import DeleteNotice from "../Delete/DeleteNotice";

export default function NoticeCard(props) {
  const { imgUrl, title, id, createdAt} = props.value;

  return (
    <div className="notice-card">
      <div className="notice-card-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="notice-card-details">
        <p>{createdAt.toDate().toDateString()}</p>
        <h1>{title}</h1>
        <div className="notice-card-p">
          <button>
            <DeleteNotice id={id} imgUrl={imgUrl} />
          </button>
        </div>
      </div>
    </div>
  );
}
