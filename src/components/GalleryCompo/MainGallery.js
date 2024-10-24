import React from "react";
import useGalleryPaginated from "../../hooks/useGalleryPaginated";
import useGallery from "../../hooks/useGallery";
import GalleryCard from "./GalleryCard";

export default function MainGallery() {
  const { article } = useGallery();

  const { articles, loading, handleLoadMore } = useGalleryPaginated();

  return (
    <>
      <div className="gallery-container">
        {articles.map((value, index) => (
          <div key={index}>
            <GalleryCard value={value} />
          </div>
        ))}
      </div>

      <div className="load-more-btn">
        {articles.length === article.length ? (
          articles.length < 10 ? (
            ""
          ) : (
            <button onClick={handleLoadMore}>
              {loading ? <h1>Loading</h1> : "No More Blogs"}
            </button>
            
          )
        ) : (
          <button onClick={handleLoadMore}>
            {loading ? <h1>Loading</h1> : "Watch More Blogs"}
          </button>
        )}
      </div>
    </>
  );
}
