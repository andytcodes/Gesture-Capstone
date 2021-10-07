import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import '../index.css';

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
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
        history.push("/Home") // /
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div>
        <div class="modal-box App">
          <h2 className="text-primary font-bold text-3xl">Update Profile</h2>
          {error && <alert variant="danger">{error}</alert>}
          {error && <alert variant="danger">{error}</alert>}
          <form onSubmit={handleSubmit}>
            <div id="email" class="form-control">
              <label class="label">
                <label class="label-text">Email</label>
              </label>
              <input
                type="email" class="input input-bordered input-primary"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password" class="form-control">
              <label class="label">
                <label class='label-text'>Password</label>
              </label>
              <input class="input input-bordered input-primary"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div id="password-confirm" class="form-control">
              <label class='label'>
                <label class='label-text'>Password Confirmation</label>
              </label>
              <input
                type="password" class="input input-bordered input-primary"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              /> <br />
            </div>
            <button disabled={loading} type="submit" className="btn btn-accent btn-wide mb-2">
              Update
            </button>
          </form>
        </div>
      </div>
      <div className="App">
        <Link to="/Home">Cancel</Link>
      </div>
    </>
  )
}