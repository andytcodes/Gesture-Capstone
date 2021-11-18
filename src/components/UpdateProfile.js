/*
@author: Thuan Nguyen
Description: styling and perform read-write-update user information
*/

import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import '../index.css';
import app from "../firebase"

export default function UpdateProfile() {
  const userID = app.auth().currentUser.uid;
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()
  const birthDayRef = useRef()
  const contactRef = useRef()
  const lessonsCompletedRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const dbRef = app.database().ref();



  function handleSubmit(e) {
    e.preventDefault()
    setSuccess("")
    setError("")
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/profile#")
        setSuccess("Updated Password!")
      })
      .catch(() => {
        setError("Failed to update account.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function updating() {
    dbRef.child("users").child(userID).get().then((snapshot) => {
      if (snapshot.exists() == true) {
        app.database().ref('users/' + userID).set({

          Image: "https://firebasestorage.googleapis.com/v0/b/auth-gesture-development.appspot.com/o/avatar%2FHackerBot.jpg?alt=media&token=f72ff8e9-8d5d-4554-9ee7-83bfb967e332",
          Email: emailRef.current.value,
          Name: nameRef.current.value,
          Birthday: birthDayRef.current.value,
          Contact: contactRef.current.value,
          Lessons_completed: lessonsCompletedRef.current.value
        });
        history.push("/profile#")
        setSuccess("Your profile is updated!")
      }
    });
  }

  return (
    <>
      <a href="#update-profile" className="btn btn-accent btn-wide mt-4 font-bold" >Update Profile</a> <br></br>
      <a href="#change-password" className="btn btn-accent btn-wide mt-4 my-4 font-bold" >Change password</a>
      <div id="change-password" class="modal">
        <div class="modal-box bg-neutral-content">
          <h2 className="text-primary font-bold text-3xl mb-2">Update Profile</h2>
          {error && <alert variant="danger" class="text-error font-semibold">{error}</alert>}
          {success && <alert variant="success" class="text-success font-semibold">{success}</alert>}
          <form onSubmit={handleSubmit}>
            <div id="email" class="form-control">
              <label class="label">
                <label class="label-text text-black">Email</label>
              </label>
              <input
                type="email" class="input input-bordered input-primary text-black bg-neutral-content"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password" class="form-control">
              <label class="label">
                <label class='label-text text-black'>Password</label>
              </label>
              <input class="input input-bordered input-primary text-black bg-neutral-content"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div id="password-confirm" class="form-control">
              <label class='label'>
                <label class='label-text text-black'>Password Confirmation</label>
              </label>
              <input
                type="password" class="input input-bordered input-primary text-black bg-neutral-content"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              /> <br />
            </div>
            <button disabled={loading} type="submit" className="btn btn-accent btn-wide mb-2">
              Update
            </button>
          </form>
          <a href="/profile#" class="text-primary">Cancel</a>
        </div>
      </div>

      <div id="update-profile" class="modal">
        <div class="modal-box bg-neutral-content">
          <h2 className="text-primary font-bold text-3xl mb-2">Update Profile</h2>
          {error && <alert variant="danger" class="text-error font-semibold">{error}</alert>}
          {success && <alert variant="success" class="text-success font-semibold">{success}</alert>}
          <form onSubmit={updating}>
            <div id="password" class="form-control">
              <label class="label">
                <label class='label-text text-black'>Name</label>
              </label>
              <input class="input input-bordered input-primary text-black bg-neutral-content"
                type="text"
                ref={nameRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div id="password-confirm" class="form-control">
              <label class='label'>
                <label class='label-text text-black'>Day of Birth</label>
              </label>
              <input
                type="text" class="input input-bordered input-primary text-black bg-neutral-content"
                ref={birthDayRef}
                placeholder="Leave blank to keep the same"
              /> <br />
            </div>
            <div id="password-confirm" class="form-control">
              <label class='label'>
                <label class='label-text text-black'>Contact</label>
              </label>
              <input
                type="text" class="input input-bordered input-primary text-black bg-neutral-content"
                ref={contactRef}
                placeholder="Leave blank to keep the same"
              /> <br />
            </div>
            <div id="password-confirm" class="form-control">
              <label class='label'>
                <label class='label-text text-black'>Lessons Completed</label>
              </label>
              <input
                type="text" class="input input-bordered input-primary text-black bg-neutral-content"
                ref={lessonsCompletedRef}
                placeholder="Leave blank to keep the same"
              /> <br />
            </div>
            <button disabled={loading} type="submit" className="btn btn-accent btn-wide mb-2">
              Update
            </button>
          </form>
          <a href="/profile#" class="text-primary">Cancel</a>
        </div>
      </div>
    </>
  )
}