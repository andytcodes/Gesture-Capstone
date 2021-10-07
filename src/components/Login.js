import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../index.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div>
      <a href="#login-form" className="btn btn-accent btn-wide mb-2" >Login</a>
          <div id="login-form" class="modal">
            <div class="modal-box">
          <h2 className="text-primary font-bold text-3xl" >Login</h2>
          {error && <alert variant="danger">{error}</alert>}      
          {error && <alert variant="danger">{error}</alert>}            
          <form onSubmit={handleSubmit}>
            <div id="email" class="form-control">
              <label class="label">
                <label class="label-text">Email</label> <br/>
              </label>
              <input placeholder="email" class="input input-bordered input-primary" type="email" ref={emailRef} required />
            </div>
            <div id="password" class="form-control">
              <label class="label">
                <label class="label-text" >Password</label>
              </label>
              <input placeholder="password" class="input input-bordered input-primary mb-4" type="password" ref={passwordRef} required />
            </div>
            <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
            <div class="modal-action">
              <button class="btn btn-primary" disabled={loading} variant="warning" type="submit">
                Login
              </button>
              <a href="/" class="btn">Close</a>              
            </div>
          </form>                
      </div>
    </div>
    </div>
    </>
  )
}
