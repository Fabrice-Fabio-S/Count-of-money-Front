import "./Login.css";
import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Mail: "", Password: "", id: {}, isLogged: false };

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMail(event) {
    this.setState({ Mail: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ Password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { Mail, Password } = this.state;

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(Mail)) {
      alert("Incorrect filled in email");
      return -1;
    }
    if (!Password) {
      alert("Password not specified");
      return -1;
    }

    const user = {
      email: Mail,
      password: Password,
    };
    axios
      .post("http://localhost:3000/api/login", user)
      .then((res) => {
        console.log("Reponse recu : " + JSON.stringify(res.data.data, null, 4));

        this.setState({ id: res.data.data, isLogged: true });
        localStorage.setItem("id", res.data.data);
        localStorage.setItem("isLogged", true);
      })
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  }

  render() {
    return (
      <div className="login">
        <p>Login</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Mail :<br></br>
              <input
                type="text"
                autoComplete="username"
                value={this.state.Mail}
                onChange={this.handleChangeMail}
              />
            </label>
          </div>
          <div>
            <label>
              Password :<br></br>
              <input
                type="password"
                autoComplete="current-password"
                value={this.state.Password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
