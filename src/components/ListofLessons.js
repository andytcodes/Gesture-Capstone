/**
 * Load all lessons from subject click
 * @author Andy Tran
 */


// TODO: Update link to go to lesson pages

import { useParams } from "react-router";
import React, { useState, useEffect} from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app, {db} from "../firebase";

export default function ListofLessons(){

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const user = app.auth().currentUser;

  app.auth().onAuthStateChanged(function(user){
    if(user){
      console.log("user is siged in");
    }
  })

  // console.log(userID + " " + userEmail);

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  };

  //get id of current page
  const {id} = useParams();
  // console.log(id);
  
  //Subject and Lesson data
  const [subject, setSubject] = useState({});
  const [lessons, setLessons] = useState([]);

  //useEffect to fetch and store subject data
  useEffect(() => {
    async function fetchSubject(){
      const querySnapshot = await db.collection("Lessons").doc(`${id}`).get();
      const data = querySnapshot.data();

      setSubject(data);
      setLessons(data.lessons);
      console.log(data);
      console.log(data.lessons);
    }

    fetchSubject();
  }, []);

  return(
    <>
      {document.documentElement.classList.add('bg-base-content')}
      <div class="sticky top-0 navbar mb-2 shadow-md bg-neutral-content text-primary-content">

        <div class="flex-1 px-2 mx-2">
          <span class="text-xl font-bold text-primary">
            Gesture
          </span>
        </div>
        <div class="flex-none hidden px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <Link class="btn btn-ghost btn-sm rounded-btn mr-2" to="/dashboard">Dashboard</Link>
            <Link class="btn btn-ghost btn-sm rounded-btn text-primary mr-2" to="/learn">Learn</Link>
            <Link class="btn btn-ghost btn-sm rounded-btn mr-2" to="/profile">Profile</Link>
            <Link class="btn btn-host btn-sm rounded-btn btn-warning mr-2" variant="link" onClick={handleLogout}>Logout</Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-3">
        {lessons.map(s =>(
          <Link to={`/learn/${id}/${s}`}> 
            <div 
              className="text-neutral bg-neutral-content rounded-lg border-transparent 
              h-36 flex flex-col justify-center items-center shadow-xl 
              transition duration-300 hover:bg-secondary hover:text-secondary-content transform hover:scale-90">
                <h1 className="text-2xl font-semibold">{s}</h1>
            </div>
          </Link>
        ))}
      </div>
      
    </>
  );
}