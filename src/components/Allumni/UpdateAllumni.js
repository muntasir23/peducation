import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateAllumni() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignantion] = useState("");
  const [session, setSession] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://studentsbackend-v1du.onrender.com/api/allumni/" + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setSession(result.data.session);
        setCompanyName(result.data.companyName);
        setDesignantion(result.data.attendence);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://studentsbackend-v1du.onrender.com/api/allumni/" + id, {
        name,
        email,
        phone,
        session,
        companyName,
        designation,
      })
      .then((result) => {
        console.log(result);
        alert("Updated Succesfully");
        navigate("/allumni");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-student-container">
      <div className="from">
        <div className="addstudenstForm">
          {" "}
          <div className="two-input-holder">
            <div>
              <p>Student Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <p>Student Registration</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Student Session</p>
              <input
                type="text"
                value={session}
                onChange={(e) => setSession(e.target.value)}
              />
            </div>
            <div>
              <p>Student ClassRoll</p>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Company Name</p>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div>
              <p>Designation</p>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignantion(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="two-input-holder">
            <div>
              <p>Select Student Catagory</p>
              <select value={cata} onChange={(e) => setCata(e.target.value)}>
                <option>Select </option>
                <option>Hons </option>
                <option>Masters </option>
                <option>Degree </option>
                <option>Inter</option>
              </select>
            </div>
            <div>
              <p>
                Click Update to <strong>Update</strong>{" "}
              </p>
              <button onClick={handleSubmit}>Update</button>
            </div>
          </div> */}
        </div>

        <div>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
}
