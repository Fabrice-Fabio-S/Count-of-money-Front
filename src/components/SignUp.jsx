import "./SignUp.css";
import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Mail: '', UserName : '', Password : '', ConfirmPassword: ''};

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeMail(event) {
    this.setState({Mail: event.target.value});
  }

  handleChangeUserName(event) {
    this.setState({UserName: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({Password: event.target.value});
  }

  handleChangeConfirmPassword(event) {
    this.setState({ConfirmPassword: event.target.value});
  }

  handleSubmit(event) {
    const { Mail, UserName, Password, ConfirmPassword } = this.state;
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
    if (!UserName) {
      alert('Username not specified');
      event.preventDefault();
      return (-1);
    }
    if (!pattern.test(Mail)) {
      alert('Incorrect filled in email');
      event.preventDefault();
      return (-1);
    }
    if (ConfirmPassword != Password) {
      alert('Incorrect Password');
      event.preventDefault();
      return (-1);
    }
  }

  render() {
    return (
      <div className="signup">
        <p>SignUp</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            UserName :
            <br></br>
            <input type="text" value={this.state.UserName} onChange={this.handleChangeUserName}/>
          </label>
          <label>
            Mail :
            <br></br>
            <input type="text" value={this.state.Mail} onChange={this.handleChangeMail}/>
          </label>
          <label>
            Password :
            <br></br>
            <input type="password"  value={this.state.Password} onChange={this.handleChangePassword}/>
          </label>
          <label>
            Confirm Password :
            <br></br>
            <input type="password" value={this.state.ConfirmPassword} onChange={this.handleChangeConfirmPassword}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
