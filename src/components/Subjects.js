/*
This component loads all the asl subjects from firestore and renders it to the page
using flexbox

@author: Andy Tran
*/
import React, { useState, useEffect } from "react";
import {db} from "../firebase";

export default function Subjects() {

  //Create subject state to store fetched subject from Firestore
  const [subjects, setSubjects] = useState([]);

  //useEffect to fetch and store subject data
  useEffect(() => {
    async function fetchSubjects(){
      const querySnapshot = await db.collection("Subjects").get();
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });

      setSubjects(data);
      console.log(subjects);
    }

    fetchSubjects();
  }, []);


  //populate page by display subjects
  return(
    <>
      {subjects.map(subject =>(
        <div 
        className="text-neutral bg-neutral-content rounded-md border-transparent 
        h-24 flex justify-center items-center">
          <h1 key={subject.id} >{subject.title}</h1>
        </div>
      ))}
    </>
  );

};