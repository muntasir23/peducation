import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../../firebaseConfigue";

export default function MultiplePost() {
  const [selectedFiles, setSelectedFilfes] = useState([]);
  const [title, setTitle] = useState("");
  const [uploadProgress, setUploadProgress] = useState(null);
  const createdAt = Timestamp.now().toDate()

  const handleFileChange = (e) => {
    setSelectedFilfes(e.target.files);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async () => {
    const filesData = [];

    try {
      for (const file of selectedFiles) {
        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error Uploading file:", error);
            console.log(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            filesData.push({ fileName: file.name, downloadURL: downloadURL });
            if (filesData.length === selectedFiles.length) {
              try {
                const docRef = await addDoc(collection(db, "Multinotice"), {
                  title: title,
                  files: filesData,
                  createdAt
                });
                setTitle("");
                setSelectedFilfes([]);
                setUploadProgress(0);
                alert("Success");
              } catch (error) {
                console.log(error);
              }
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="multiple-noticeholder">
      <div className="titles-of-multi-file">
        <h1> Here you can upload a <strong>Notice</strong></h1>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="all-inputs">
        <input type="file" multiple onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      {/* <button onClick={handleUpload}>Push</button> */}
    </div>
  );
}
