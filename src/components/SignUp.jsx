import "./SignUp.css";
import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mail: "",
      LastName: "",
      FirstName: "",
      Password: "",
      ConfirmPassword: "",
    };

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMail(event) {
    this.setState({ Mail: event.target.value });
  }

  handleChangeLastName(event) {
    this.setState({ LastName: event.target.value });
  }

  handleChangeFirstName(event) {
    this.setState({ FirstName: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ Password: event.target.value });
  }

  handleChangeConfirmPassword(event) {
    this.setState({ ConfirmPassword: event.target.value });
  }

  handleSubmit(event) {
    const { Mail, LastName, FirstName, Password, ConfirmPassword } = this.state;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!LastName) {
      alert("LastName not specified");
      event.preventDefault();
      return -1;
    }
    if (!FirstName) {
      alert("LastName not specified");
      event.preventDefault();
      return -1;
    }
    if (!pattern.test(Mail)) {
      alert("Incorrect filled in email");
      event.preventDefault();
      return -1;
    }
    if (ConfirmPassword !== Password) {
      alert("Incorrect Password");
      event.preventDefault();
      return -1;
    }

    const newUser = {
      lastname: LastName,
      firstname: FirstName,
      email: Mail,
      password: Password,
    };

    axios
      .post("http://localhost:3000/api/register", newUser)
      .then(function (res) {
        //handle success
        console.log(res.data);
      })
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  }

  render() {
    return (
      <div className="signup">
        <p>SignUp</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              LastName :<br></br>
              <input
                type="text"
                value={this.state.LastName}
                onChange={this.handleChangeLastName}
              />
            </label>
          </div>
          <div>
            <label>
              FirstName :<br></br>
              <input
                type="text"
                value={this.state.FirstName}
                onChange={this.handleChangeFirstName}
              />
            </label>
          </div>
          <div>
            {" "}
            <label>
              Mail :<br></br>
              <input
                type="text"
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
                value={this.state.Password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>
          <div>
            <label>
              Confirm Password :<br></br>
              <input
                type="password"
                value={this.state.ConfirmPassword}
                onChange={this.handleChangeConfirmPassword}
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

export default SignUp;
