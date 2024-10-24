import React from "react";
import useTeacher from "../../hooks/useTeacher";
import { Link } from "react-router-dom";
import DeleteBlog from "../Delete/Delete";
import DeleteTeacher from "../Delete/DeleteTeacher";

export default function Teacher() {
  const { teacher, loading } = useTeacher();

  return (
    <div className="teacher-container">
      {teacher.map((value, index) => (
        <div key={index} className="each-teacher-box">
          <div className="home-teacher-image-circle">
            <img alt="" src={value.imgUrl} />
          </div>
          <h3>{value.name}</h3>
          <h3>{value.designation}</h3>
          <h3>{value.phone}</h3>
          <div>
            <Link to={`/${value.name}/${value.id}`}>View</Link>
            <button>
              <DeleteTeacher id={value.id} imgUrl={value.imgUrl} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
