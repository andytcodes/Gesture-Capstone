/*
Thuan Nguyen
Modify: writting user information
Description: Check if user is already in the database, if not write a new user
-----
Andy Tran
Modify: modify navBar
*/

import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";
import UpdateProfile from "./UpdateProfile";
import NavBar from "./NavBar";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const user = app.auth().currentUser;
  const userID = user.uid;
  const userEmail = user.email;
  const dbRef = app.database().ref();

  //Check if the user is available in the database
  dbRef.child("users").child(userID).get().then((snapshot) => {
    if (snapshot.exists() == false) {
      app.database().ref('users/' + userID).set({

        Image: "https://firebasestorage.googleapis.com/v0/b/auth-gesture-development.appspot.com/o/avatar%2FHackerBot.jpg?alt=media&token=f72ff8e9-8d5d-4554-9ee7-83bfb967e332",
        Email: userEmail,
        Name: " ",
        Birthday: " ",
        Contact: " ",
        Lessons_completed: " "
      });
    }
  });

  //Display the current user info in the database
  dbRef.child("users").child(userID).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      document.getElementById("image").src = snapshot.val().Image
      document.getElementById("email").innerHTML = snapshot.val().Email
      document.getElementById("name").innerHTML = snapshot.val().Name
      document.getElementById("birthday").innerHTML = snapshot.val().Birthday
      document.getElementById("contact").innerHTML = snapshot.val().Contact
      document.getElementById("lessons_completed").innerHTML = snapshot.val().Lessons_completed

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return (
    <>
      <NavBar page="profile" />

      <div className="text-center mt-10 text-neutral">
        <img className="avatar" id="image" src="" alt="" /><br />
        <div className="text-2xl font-semibold userWrap">
          <label className='text-primary'>Email: </label>
          <h2 id="email" className="input shadow bg-neutral-content w-2/6 text-center"></h2>
          <label className='text-primary'>Name: </label>
          <h2 id="name" className="input shadow bg-neutral-content w-2/6 text-center"> </h2>
          <label className='text-primary'>Day of birth: </label>
          <h2 id="birthday" className="input shadow bg-neutral-content w-2/6 text-center"> </h2>
          <label className='text-primary'>Contact: </label>
          <h2 id="contact" className="input shadow bg-neutral-content w-2/6 text-center"> </h2>
          <label className='text-primary'>Lessons Completed: </label>
          <h2 id="lessons_completed" className="input shadow bg-neutral-content w-2/6 text-center"> </h2>
        </div>
        <UpdateProfile />
      </div>
    </>
  )
}