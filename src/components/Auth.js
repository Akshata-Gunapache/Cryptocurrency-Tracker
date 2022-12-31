import React from "react";
import { useHistory } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome Back! <br></br>Please Sign In to your account.</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={routeChange}>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Login;


