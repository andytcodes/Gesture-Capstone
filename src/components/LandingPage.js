import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import logo from '../images/landing_page/Gesture_Logo_05.png';
import undrawSVG from '../images/landing_page/undraw_back_to_school_inwc.svg'

const LandingPage = () => {

  return(
    // <div className="h-screen">
    //   <div className="h-120p w-64 bg-lightAccent bg-opacity-20 absolute transform rotate-20 -left-9 -top-9"></div>
    //   <div className="h-120p w-64 bg-lightAccent bg-opacity-20 absolute transform rotate-140 -left-9 -bottom-15"></div>
    //   <img src={TreeSwingSVG} alt="Tree-Swing" className="absolute top-26 -left-13"/>
    //   <img src={logo} alt="Gesture logo" className="pt-96 ml-24 w-18"/>
    // </div>

    <div>
      <img src={logo} className="absolute w-32 ml-4 mt-4" alt="Gesture logo"/>
      {/* Hero Starts */}
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center flex flex-col items-center justify-center m-4">
          {/* Main */}
          <img src={undrawSVG} alt="Time to learn" className="w-48 xl:w-80 mb-4 xl:mb-8"/>
          <h1 className="text-2xl xl:text-4xl font-bold mb-4 xl:mb-8">
                It's your time to sign! <br/> Begin your ASL journey on  
                <em className="text-primary"> Gesture</em>! 👋
          </h1>
          {/* Login Form */}
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
          {/* Login Form End */}
          {/* Register Form */}
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
          {/* Register Form End */}
          {/* collapse content */}
          <div className="collapse collapse-arrow w-60 border rounded-box border-primary border-opacity-5 shadow-2xl" tabIndex="0">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl">What is <em className="text-primary"> Gesture</em>?</div>
            <div className="collapse-content">
              <p> 
                <em className="text-primary">Gesture </em> 
                is an interactive and testing web application that aims to teach new users the 
                <em> American Sign Language</em>
              </p>
            </div>
          </div>
          {/* collapse content ends */}
        </div>
      </div>
      {/* Hero Ends */}
    </div>
  )
    
    

}

export default LandingPage;