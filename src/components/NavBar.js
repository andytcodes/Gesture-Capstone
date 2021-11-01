import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";

export default function NavBar(props) {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const user = app.auth().currentUser;
  const userID = user.uid;
  const userEmail = user.email;

  //navbar link highlight
  let dashboard = "text-neutral";
  let learn = "text-neutral";
  let profile = "text-neutral";
  let gesture = "text-neutral";

  switch(props.page){
    case "dashboard":
      dashboard = "text-primary";
      break;
    case "learn":
      learn = "text-primary";
      break;
    case "profile":
      profile = "text-primary";
      break;
    case "gesture":
      gesture = "text-primary";
      break;
    default:
      dashboard = "text-neutral";
      learn = "text-neutral";
      profile = "text-neutral";
  }

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  };

  app.auth().onAuthStateChanged(function(user){
    if(user){
      console.log("user is siged in");
    }
  })

  function writeUserData(userID, userEmail) {

    app.database().ref('users/' + userID).set({

      Email: userEmail,
    });
  }

  writeUserData(userID, userEmail);


  return (
    <>
      {document.documentElement.classList.add('bg-base-content')}
      <div class="z-50 sticky top-0 navbar mb-2 shadow-md bg-neutral-content text-primary-content">
        <div class="flex-1 px-2 mx-2">
          <span class="text-xl font-bold text-primary">
            Gesture
          </span>
        </div>
        <div class="flex-none hidden px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <Link class={`btn btn-ghost btn-sm rounded-btn mr-2 transition duration-200 hover:text-primary-focus ${dashboard}`} to="/dashboard">Dashboard</Link>
            <Link class={`btn btn-ghost btn-sm rounded-btn mr-2 transition duration-200 hover:text-primary-focus ${learn}`} to="/learn">Learn</Link>
            <Link class={`btn btn-ghost btn-sm rounded-btn mr-2 transition duration-200 hover:text-primary-focus ${gesture}`} to="/gesture">Gesture</Link>
            <Link class={`btn btn-ghost btn-sm rounded-btn mr-2 transition duration-200 hover:text-primary-focus ${profile}`} to="/profile">Profile</Link>
            <Link class="btn btn-host btn-sm rounded-btn btn-warning mr-2" variant="link" onClick={handleLogout}>Logout</Link>
          </div>
        </div>
      </div>
      </>
  )
};