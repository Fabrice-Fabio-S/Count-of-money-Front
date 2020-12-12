import "./Login.css";
import React from "react";
// import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({
          isLogged,
          id,
          Mail,
          Password,
          handleSubmit,
          handleChangePassword,
          handleChangeMail,
          errorMsg,
        }) =>
          isLogged ? (
            <Redirect to="/" />
          ) : (
            <div className="login">
              <h2>Login</h2>
              <div>
                <Button
                  href={
                    process.env.REACT_APP_BACK_API_URL +
                    `/api/users/auth/google`
                  }
                >
                  <i className="fab fa-google"></i>
                  Log in with Google
                </Button>
              </div>
              <div>
                <p>OR</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Email :<br></br>
                    <input
                      type="text"
                      autoComplete="username"
                      value={Mail}
                      onChange={handleChangeMail}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Password :<br></br>
                    <input
                      type="password"
                      autoComplete="current-password"
                      value={Password}
                      onChange={handleChangePassword}
                    />
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                {errorMsg && <Alert variant={"danger"}>{errorMsg}</Alert>}
              </form>
            </div>
          )
        }
      </AuthContext.Consumer>
    );
  }
}

export default Login;
