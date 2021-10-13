import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import LandingPage from "./LandingPage"
import Home from "./Home"
import Alphabet from "./Alphabet"
import '../index.css';
import Register from "./Register"



function App() {
  return (
    <div>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Home" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/" exact component={LandingPage} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/categories" component={Home} />
              <Route path="/alphabet" component={Alphabet} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )

}

export default App;
