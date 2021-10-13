import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";

export default function Dashboard() {
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
      <div class="sticky top-0 border-solid border-2 border-primary navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">

        <div class="flex-1 px-2 mx-2">
          <span class="text-lg font-bold text-primary">
            Gesture
          </span>
        </div>
        <div class="flex-none hidden px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn mr-2" href="/categories">Home</a>
            <a class="btn btn-ghost btn-sm rounded-btn text-primary mr-2">Profile</a>
            <a class="btn btn-host btn-sm rounded-btn btn-warning mmr-2" variant="link" onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="mb-4 text-3xl">Profile</h2>
        <strong>Email:</strong> {currentUser.email} <br />
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3" >
            Update Profile
        </Link>
      </div>
    </>
  )
}
