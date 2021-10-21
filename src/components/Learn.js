import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";

export default function Learn () {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const user = app.auth().currentUser;
  const userID = user.uid;
  const userEmail = user.email;

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

  function writeUserData(userID, userEmail) {

    app.database().ref('users/' + userID).set({

      Email: userEmail,
    });
  }

  writeUserData(userID, userEmail);

  return (
    <>
    {document.documentElement.classList.add('bg-base-content')}
    <div class="sticky top-0 navbar mb-2 shadow-lg bg-neutral-content text-primary-content">

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

    <div className="flex mt-10 space-x-4 ">
      <div class="card shadow text-neutral text-center border w-1/4">
        <div class="card-body">
          <h2 class="card-title">Numbers</h2> 
          <p>Learn how to count to 10 with ASL!</p>
        </div>
      </div>
      <div class="card shadow text-neutral text-center border w-1/4">
        <div class="card-body">
          <h2 class="card-title">Alphabet</h2> 
          <p>Learn how to sign all 26 letters!</p>
        </div>
      </div>
      <div class="card shadow text-neutral text-center border border border-accent w-1/4">
        <div class="card-body">
          <h2 class="card-title">Quiz 1</h2> 
          <p>Your very first Quiz! Come an test what you've learnt so far!</p>
        </div>
      </div>   
      <div class="card shadow text-neutral text-center border w-1/4">
        <div class="card-body">
          <h2 class="card-title">Shortcut: I Love You</h2> 
          <p>Let's learn how to say I Love You in the fastest way possible!</p>
        </div>
      </div> 
    </div>
    </>
  )
}