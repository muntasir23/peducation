import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfigue';

export default function useRoutine() {
    const [routineSat, setRoutinesat] = useState([]);
    const [routineSun, setRoutineSun] = useState([]);
    const [routineMon, setRoutineMon] = useState([]);
    const [routineTue, setRoutineTue] = useState([]);
    const [routineWed, setRoutineWed] = useState([]);
    const [routineThu, setRoutineThus] = useState([]);
    // const [newArticle , setNewarticle] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"Sunday"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutineSun(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);

    //sat
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"Saturday"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutinesat(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);

    //mon
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"Monday"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutineMon(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);
    //tues
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"Tuesday"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutineTue(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);
    //wed
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"Wednesday"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutineWed(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);
    //thus
    useEffect(() => {
      const routineSunRef = collection(db, "Routine");
      const q = query(routineSunRef, where ("day", "==" ,"ThursDay"));
      onSnapshot(q, (snapshot) => {
        const routine = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutineThus(routine);
        // setNewarticle(article);
        setLoading(false);
        console.log(routine);
      });
    }, []);


  return {routineSun, routineSat,routineMon,routineTue, routineWed, routineThu,  loading}
}
