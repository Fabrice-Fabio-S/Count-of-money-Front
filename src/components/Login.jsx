import "./Login.css";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { UserName: "", Password: "" };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(event) {
    this.setState({ UserName: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ Password: event.target.value });
  }

  handleSubmit(event) {
    const { UserName, Password } = this.state;

    if (!UserName) {
      alert("Username not specified");
      event.preventDefault();
      return -1;
    }
    if (!Password) {
      alert("Password not specified");
      event.preventDefault();
      return -1;
    }
  }

  render() {
    return (
      <div className="login">
        <p>Login</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              UserName :<br></br>
              <input
                type="text"
                value={this.state.UserName}
                onChange={this.handleChangeUserName}
              />
            </label>
          </div>
          <div>
            <label>
              Password :<br></br>
              <input
                type="password"
                value={this.state.Password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
