import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

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
      
      <div class="modal-box">
          <h2 className="text-primary font-bold text-3xl" >Log In</h2>
          {error && <alert variant="danger">{error}</alert>}      
          {error && <alert variant="danger">{error}</alert>}            
          <form onSubmit={handleSubmit}>
            <div id="email" class="form-control label">
              <label class="label-text">Email</label> <br/>
              <input class="input input-bordered input-primary" type="email" ref={emailRef} required />
            </div>
            <div id="password" class="form-control label">
              <label class="label-text" >Password</label>
              <input class="input input-bordered input-primary" type="password" ref={passwordRef} required />
            </div>
            <div class="modal-action">
              <button class="btn btn-primary" disabled={loading} variant="warning" className="w-100" type="submit">
                Log In
                <a href="/" class="btn">Close</a>
              </button>
            </div>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        
      
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  )
}
