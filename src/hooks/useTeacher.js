
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../firebaseConfigue";

export default function useTeacher() {

    const [teacher, setTeacher] = useState([]);
    // const [newArticle , setNewarticle] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const teacherRef = collection(db, "Teacher");
      const q = query(teacherRef);
      onSnapshot(q, (snapshot) => {
        const teacher = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeacher(teacher);
        // setNewarticle(article);
        setLoading(false);
        console.log(teacher);
      });
    }, []);
  
  return {teacher , loading}
}
