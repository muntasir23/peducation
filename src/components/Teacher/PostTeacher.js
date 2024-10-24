import React, { useState } from "react";
import "./Teacher.css";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebaseConfigue";

export default function PostTeacher() {
  const [formdata, setFormdata] = useState({
    name: "",
    designation: "",
    email: "",
    image: "",
    phone: "",
    createdAt: Timestamp.now().toDate(),
  });

  //progressBar state
  const [progress, setProgress] = useState(0);

  // current User

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormdata({ ...formdata, image: e.target.files[0] });
  };
  const handleSubmit = () => {
    if (!formdata.image) {
      alert("Please fill all the data");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formdata.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formdata.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercents = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercents);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormdata({
          name: "",
          designation: "",
          email: "",
          phone: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, "Teacher");
            addDoc(articleRef, {
              name: formdata.name,
              designation: formdata.designation,
              imgUrl: url,
              email: formdata.email,
              phone: formdata.phone,
              createdAt: Timestamp.now().toDate(),
            });
          })
          .then(() => {
            alert("Added Succesfully");
            setProgress(0);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  return (
    <div className="post-teacher-container">
      <div className="post-teacher-details">
        <h1>
          Here you can post <strong>Teacher</strong> details{" "}
        </h1>
        <button onClick={handleSubmit}>Upload</button>
      </div>

      <div className="post-teacher-input">
        <input
          placeholder="Enter Name"
          name="name"
          value={formdata.name}
          onChange={(e) => handleChange(e)}
        />
        <select
          name="designation"
          value={formdata.designation}
          onChange={(e) => handleChange(e)}
        >
          <option>Select designation</option>
          <option>Head Of Department</option>
          <option>Associate Professor</option>
          <option>Assistant Professor</option>
          <option>Lecturer</option>
        </select>
      </div>
      <div className="post-teacher-input">
        <input
          placeholder="Enter Contact Number"
          name="phone"
          value={formdata.phone}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Enter Email Address"
          name="email"
          value={formdata.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="post-teacher-input">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        <p>{progress}%</p>
      </div>
    </div>
  );
}
