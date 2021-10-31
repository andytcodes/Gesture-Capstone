import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "../firebase";
import Subjects from "./Subjects";

export default function Learn () {
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

  return (
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
      <Subjects/>
    </div>
    </>
  )
}