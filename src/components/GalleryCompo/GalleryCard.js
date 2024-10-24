import React from "react";
import DeleteBlog from "../Delete/Delete";

export default function GalleryCard(props) {
  const { imgUrl, desc, id, createdAt } = props.value;

  return (
    <div className="notice-card">
      <div className="notice-card-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="notice-card-details">
        <p>{createdAt.toDate().toDateString()}</p>
        <h1>{desc > desc.slice(0, 10) ? desc.slice(0,10) + "..." : desc}</h1>
        {/* <h1>{desc.slice(0, 10)}...</h1> */}
        <div className="notice-card-p">
          <button>
            <DeleteBlog id={id} imgUrl={imgUrl} />
          </button>
        </div>
      </div>
    </div>
  );
}
