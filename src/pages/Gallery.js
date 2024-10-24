import React from "react";
import HeaderGallery from "../components/GalleryCompo/HeaderGallery";
import MainGallery from "../components/GalleryCompo/MainGallery";

export default function Gallery() {
  return (
    <div className="gallery">
      <HeaderGallery />
      <MainGallery />
    </div>
  );
}
