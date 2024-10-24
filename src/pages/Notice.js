import React from "react";
import HeaderNotice from "../components/NoticeCompo/HeaderNotice";
import MainNotice from "../components/NoticeCompo/MainNotice";

export default function Notice() {
  return (
    <div className="notice">
      <HeaderNotice />
      <MainNotice />
    </div>
  );
}
