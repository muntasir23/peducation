import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfigue';

export default function useNotice() {
    const [notice, setNotice] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const articleRef = collection(db, "Notice");
      const q = query(articleRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        const article = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotice(article);
        setLoading(false);
      });
    }, []);

  return {notice , loading , setNotice}
}
