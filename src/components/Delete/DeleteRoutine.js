import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { toast } from "react-toastify";
import { db, storage } from "../../firebaseConfigue";

export default function DeleteRoutine(props) {
  const { id} = props;
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Routine", id));
      alert("A Routine details has removed!");
    //   const storageRef = ref(storage, imgUrl);
    //   await deleteObject(storageRef);
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
