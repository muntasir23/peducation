import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfigue";
import useTeacher from "../../hooks/useTeacher";
import { useNavigate, useParams } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

export default function RoutineUpdate() {
  const [routine, setRoutine] = useState();
  const { teacher } = useTeacher();
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const [classDetails, setClassdetails] = useState([
    {
      sirName: "",
      className: "",
      subName: "",
    },
  ]);

  const navigate = useNavigate();
  const handleItemChange = (index, key, value) => {
    const newDetails = [...classDetails];
    newDetails[index][key] = value;
    setClassdetails(newDetails);
  };

  const handleAddDetails = () => {
    setClassdetails([
      ...classDetails,
      {
        sirName: "",
        className: "",
        subName: "",
      },
    ]);
  };

  const handleNavigate = () => {
    navigate("/routinedetails");
  };
  const handleRemoveItem = (index) => {
    const newDetails = [...classDetails];
    newDetails.splice(index, 1);
    setClassdetails(newDetails);
  };

  const handleConsole = async (e) => {
    e.preventDefault();
    console.log("this is");
    console.log(day);
    console.log(classDetails);

    try {
      const docRef = await addDoc(collection(db, "Routine"), {
        day: day,
        time: time,
        classDetails: classDetails,
      });
      alert("Done");
    } catch (error) {
      console.log(error);
    }
    setDay("");
    setTime("");
    setClassdetails([{ sirName: "", className: "", time: "", subName: "" }]);
  };

  useEffect(() => {
    const docRef = doc(db, "Routine", id);
    onSnapshot(docRef, (snapshot) => {
      setRoutine({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);


  const updateDoc = async (routine) =>{
    try{
        const routineRef = doc(db, "Routine")
        await updateDoc(routineRef,routine)
    }catch{

    }
  }

  console.log(routine);

  return (
    <div className="routine-post-box">
      <div className="btn-routine">
        <button onClick={handleConsole}>Submit</button>
        {/* <button onClick={handleAddDetails}>Add Details</button>
        <button onClick={handleNavigate}>View Routine</button> */}
      </div>

      <div className="routine-form">
        <div className="common-items-of-routine">
          {/* <input
type="text"
placeholder="Add Day Name"
value={day}
onChange={(e) => setDay(e.target.value)}
/> */}
          <select value={setRoutine.day} onChange={(e) => setDay(e.target.value)}>
            <option>Select Day</option>
            <option>Saturday</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>ThursDay</option>
          </select>
          <input
            type="text"
            placeholder="Add Time"
            value={setRoutine.time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {classDetails.map((value, index) => (
          <div key={value} className="class-details-box">
            <input
              type="text"
              placeholder="Class Name"
              value={value.className}
              onChange={(e) =>
                handleItemChange(index, "className", e.target.value)
              }
            />
            {/* <input
type="text"
placeholder="Teacher Name"
value={value.sirName}
onChange={(e) =>
handleItemChange(index, "sirName", e.target.value)
}
/> */}

            <select
              value={value.sirName}
              onChange={(e) =>
                handleItemChange(index, "sirName", e.target.value)
              }
            >
              <option>Select Teacher</option>
              {teacher.map((value, index) => (
                <option>{value.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Subject Name"
              value={value.subName}
              onChange={(e) =>
                handleItemChange(index, "subName", e.target.value)
              }
            />
            <button onClick={() => handleRemoveItem(index)}>
              <IoTrashBin />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
