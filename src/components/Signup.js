import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div >
          <h2 className="text-primary font-bold text-3xl">Sign Up</h2>        
          {error && <alert variant="danger">{error}</alert>}  
          <form onSubmit={handleSubmit} class="modal-box">
            <div id="email">
              <label class="label-text">Email</label><br/>
              <input class="input input-bordered input-primary" type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label class="label-text">Password</label><br/>
              <input class="input input-bordered input-primary" type="password" ref={passwordRef} required /> 
            </div>
            <div id="password-confirm">
              <label class="label-text">Password Confirmation</label> <br/>
              <input class="input input-bordered input-primary" type="password" ref={passwordConfirmRef} required />
            </div>
            <div class="modal-action" >
            <button class="btn btn-primary" disabled={loading} className="w-100" type="submit">
              Sign Up
              <a href="/" class="btn" >Close</a>
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}