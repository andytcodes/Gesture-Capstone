import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom";
import '../App.css';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="App">
        <div class="modal-box">
          <h2 className="text-primary font-bold text-3xl">Password Reset</h2>
          {error && <alert variant="danger">{error}</alert>}
          {message && <alert variant="success">{message}</alert>}          
          <form onSubmit={handleSubmit} class="modal-box">
            <div id="email" class="form-control">
              <label class="label">
              <label class="label-text">Email</label><br/>
              </label>
              <input class="input input-bordered input-primary" type="email" ref={emailRef} required />
            </div>
            <div class="modal-action">
              <button className="btn btn-accent btn-wide mb-2" disabled={loading} className="w-100" type="submit">
                Reset Password
              </button>
              <a href="/" class="btn">Close</a>
            </div>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}
