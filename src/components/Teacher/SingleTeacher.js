import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfigue";
import TeacherRoutine from "./TeacherRoutine";

export default function SingleTeacher() {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "Teacher", id);
    onSnapshot(docRef, (snapshot) => {
      setSingleBlog({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <div className="single-data-image">
            <img alt="" src={singleBlog.imgUrl} />
          </div>

          <div className="teacher-details-container">
            <h1 className="details-h1"><strong>Contact Details</strong> </h1>
            <div className="teacher-details">
              <div>
                <h1>Name</h1>
                <div className="each-details">
                  <p>{singleBlog.name}</p>
                </div>
              </div>
              <div>
                <h1>Designation</h1>
                <div className="each-details">
                  <p>{singleBlog.designation}</p>
                </div>
              </div>
              <div>
                <h1>Designation</h1>
                <div className="each-details">
                  <p>{singleBlog.email}</p>
                </div>
              </div>
              <div>
                <h1>Contact Number</h1>
                <div className="each-details">
                  <p>{singleBlog.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
