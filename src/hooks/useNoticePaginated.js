import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfigue";

export default function useNoticePaginated() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);

  
  const fetchArticles = async () => {
    const articleRef = collection(db, "Notice");
    let articlesQuery = query(articleRef, orderBy("createdAt", "desc"));

    if (lastVisible) {
      // If lastVisible is available, start after the last document
      articlesQuery = query(
        articleRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible)
      );
    }
    articlesQuery = query(articlesQuery, limit(5));

    const snapshot = await getDocs(articlesQuery);

    if (!snapshot.empty) {
      const newArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles((prevArticles) => [...newArticles]);
      setLoading(false);
      // Update the lastVisible for the next pagination
      setLastVisible(snapshot.docs[snapshot.docs.length - 1].data().createdAt);
    }
  };

  const handleFetchMore = async () => {
    const articleRef = collection(db, "Notice");
    let articlesQuery = query(articleRef, orderBy("createdAt", "desc"));

    if (lastVisible) {
      // If lastVisible is available, start after the last document
      articlesQuery = query(
        articleRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible)
      );
    }

    // Fetch a limited number of documents (adjust the limit as needed)
    articlesQuery = query(articlesQuery, limit(5));

    const snapshot = await getDocs(articlesQuery);

    if (!snapshot.empty) {
      const newArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setLoading(false);
      // Update the lastVisible for the next pagination
      setLastVisible(snapshot.docs[snapshot.docs.length - 1].data().createdAt);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Fetch articles on initial load

  const handleLoadMore = () => {
    handleFetchMore();
  };

  return { articles, loading, handleLoadMore, lastVisible };
}
