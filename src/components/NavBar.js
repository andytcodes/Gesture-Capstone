import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";

export default function NavBar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const user = app.auth().currentUser;
  const userID = user.uid;
  const userEmail = user.email;

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
            <a class="btn btn-ghost btn-sm rounded-btn text-primary mr-2" href="/dashboard">Dashboard</a>
            <a class="btn btn-ghost btn-sm rounded-btn mr-2" href="/profile">Profile</a>
            <a class="btn btn-host btn-sm rounded-btn btn-warning mr-2" variant="link" onClick={handleLogout}>Logout</a>
          </div>
        </div>
        
      </div>
      </>
  )
};