import React from "react";
import useMultiNotice from "../../hooks/useMultiNotice";
import NoticeCard from "./NoticeCard";
import MultiCard from "./MultiCard";
import { Link } from "react-router-dom";

export default function MultiNoticeCard() {
  const { notice, loading, setNotice } = useMultiNotice();

  return( 
  <div>
    {
        notice.map((value)=>(
            <Link>
            <MultiCard value={value} />
            </Link>
        ))
    }
  </div>
);
}
