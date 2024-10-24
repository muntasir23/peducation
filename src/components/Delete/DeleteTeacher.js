import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { toast } from "react-toastify";
import { db, storage } from "../../firebaseConfigue";

export default function DeleteTeacher(props) {
  const { id, imgUrl } = props;
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Teacher", id));
      alert("Teacher Has Removed Succesfully");
      const storageRef = ref(storage, imgUrl);
      await deleteObject(storageRef);
    } catch (err) {
      toast("Error", { type: "error" });
    }
  };

  return (
    <div onClick={handleDelete}>
      <IoTrashBin />
    </div>
  );
}
