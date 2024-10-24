import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Student.css";

export default function UpdateStudents() {
  const [name, setName] = useState();
  const [reg, setReg] = useState();
  const [roll, setRoll] = useState();
  const [session, setSession] = useState();
  const [days, setDays] = useState();
  const [attendence, setAttendence] = useState();
  const [cata, setCata] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://studentsbackend-v1du.onrender.com/api/students/" + id)
      .then((result) => {
        setName(result.data.name);
        setReg(result.data.reg);
        setRoll(result.data.roll);
        setSession(result.data.session);
        setDays(result.data.days);
        setAttendence(result.data.attendence);
        setCata(result.data.cata);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://studentsbackend-v1du.onrender.com/api/students/" + id, {
        name,
        reg,
        roll,
        session,
        days,
        attendence,
        cata,
      })
      .then((result) => {
        console.log(result);
        alert("Updated Succesfully");
        navigate("/students");
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
                value={reg}
                onChange={(e) => setReg(e.target.value)}
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
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Total Class</p>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
            <div>
              <p>Total Attendence</p>
              <input
                type="number"
                value={attendence}
                onChange={(e) => setAttendence(e.target.value)}
              />
            </div>
          </div>
          <div className="two-input-holder">
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
                <p>Click Update to <strong>Update</strong> </p>
            <button onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>

        {/* <div>
          <button onClick={handleSubmit}>Update</button>
        </div> */}
      </div>
    </div>
  );
}
