
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../firebaseConfigue";

export default function useBlog() {

    const [article, setArticle] = useState([]);
    const [newArticle , setNewarticle] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const articleRef = collection(db, "Blog");
      const q = query(articleRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        const article = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticle(article);
        setNewarticle(article);
        setLoading(false);
        console.log(article);
      });
    }, []);
  
  return {article , loading, setArticle , newArticle , setNewarticle}
}
