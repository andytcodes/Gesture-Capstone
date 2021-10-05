import React from 'react';

const Register = () => {
  return(
    <div>
      <a href="#register-form" className="link-primary block mb-10">Register</a>
      <div id="register-form" class="modal">
        <div class="modal-box">
          <h1 className="text-primary font-bold text-3xl">Register</h1>
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
              <input placeholder="password" class="input input-bordered input-primary" type="password"/>
            </div>
            <div class="modal-action">
                  <button class="btn btn-primary" type="submit">Register</button> 
                  <a href="/" class="btn">Close</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;