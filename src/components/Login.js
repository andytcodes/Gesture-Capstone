import React from 'react';

const Login = () => 
{
  return (
    <div>
      <a href="#login-form" className="btn btn-accent btn-wide mb-2" >Login</a>
          <div id="login-form" class="modal">
            <div class="modal-box">
              <h1 className="text-primary font-bold text-3xl">Login</h1>
              <form method="post" action="/">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label> 
                  <input placeholder="email" class="input input-bordered input-primary" type="text"/>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label> 
                  <input placeholder="password" class="input input-bordered input-primary mb-4" type="password"/>
                </div>
                <a href="/" className="text-primary">Forgot Password</a>
                <div class="modal-action">
                    <button class="btn btn-primary" type="submit">Login</button> 
                    <a href="/" class="btn">Close</a>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Login;