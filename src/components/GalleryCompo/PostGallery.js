import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import "./Gallery.css";

import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { db, storage } from "../../firebaseConfigue";

export default function PostGallery() {
  const [formdata, setFormdata] = useState({
    desc: "",
    image: "",
    cata: "",
    createdAt: Timestamp.now().toDate(),
  });

  //progressBar state
  const [progress, setProgress] = useState(0);

  // current User
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormdata({ ...formdata, image: e.target.files[0] });
  };
  const handleSubmit = () => {
    if (!formdata.desc || !formdata.image) {
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
          desc: "",
          cata: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, "Blog");
            addDoc(articleRef, {
              cata: formdata.cata,
              desc: formdata.desc,
              imgUrl: url,
              createdAt: Timestamp.now().toDate(),
              createdBy: currentUser.displayName,
              userId: currentUser.uid,
            });
          })
          .then(() => {
            alert("Added Succesfully");
            setProgress(0);
          })
          .catch((err) => {
            toast("Error Adding Blog", { type: "error" });
          });
      }
    );
  };

  return (
    <div className="gallery-form-holder">
      <div className="from-events-notice">
        <div className="all-input">
          <div className="input-type">
            <textarea
              type="text"
              placeholder="Enter Description"
              name="desc"
              value={formdata.desc}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-type">
          <select
              value={formdata.cata}
              name="cata"
              onChange={(e) => handleChange(e)}
              className="profileSelect"
            >
              <option>Select Catagory</option>
              <option>National Program</option>
              <option>Annual Events</option>
              <option>Other Activities</option>
            </select>
          </div>

          <div className="input-type">
            <div className="file">
              <label htmlFor="file">
                <BiCloudUpload />{" "}
              </label>
              <input
                type="file"
                id="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div>
          <p>{progress}%</p>
        </div>
        <div>
          <button className="btn-post" onClick={handleSubmit}>Post Event Photo</button>
        </div>
      </div>
    </div>
  );
}
