import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "firebase";
import '../App.css';
import { auth } from "../firebase"

export default function Register() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const user = app.auth().currentUser;

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/Home")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <a href="#register-form" className="link-primary block mb-10">Register</a>
        <div id="register-form" class="modal">
          <div class="modal-box">
            <h2 className="text-primary font-bold text-3xl">Sign Up</h2>
            {error && <alert variant="danger">{error}</alert>}
            <form onSubmit={handleSubmit}>
              <div id="email" class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input placeholder="email" class="input input-bordered input-primary" type="email" ref={emailRef} required />
              </div>
              <div id="password" class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input placeholder="password" class="input input-bordered input-primary" type="password" ref={passwordRef} required />
              </div>
              <div id="password-confirm" class="form-control">
                <label class="label">
                  <span class="label-text">Password Confirmation</span>
                </label>
                <input placeholder="confirm password" class="input input-bordered input-primary" type="password" ref={passwordConfirmRef} required />
              </div>
              <div class="modal-action" >
                <button class="btn btn-primary" disabled={loading} type="submit">
                  Register
                </button>
                <a href="/" class="btn" >Close</a>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}