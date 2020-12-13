import "./Preferences.css";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

const CurrentCryptos = [
  {
    name: "tBTCUSD",
    key: "checkBox1",
    label: "Bitcoin",
  },
  {
    name: "tETHUSD",
    key: "checkBox2",
    label: "Ethereum",
  },
  {
    name: "tUSTUSD",
    key: "checkBox3",
    label: "Tether",
  },
  {
    name: "tLTCUSD",
    key: "checkBox4",
    label: "Litecoin",
  },
  {
    name: "tXMRUSD",
    key: "checkBox5",
    label: "Monero",
  },
];

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Mail: "",
      FirstName: "",
      LastName: "",
      userId: "",
      token: "",
      checkedCrypto: new Map(),
      authFromGoogle: false,
      userCryptoChoice: "",
      redirect: false,
    };

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.ChangeLastName = this.ChangeLastName.bind(this);
    this.ChangeFirstName = this.ChangeFirstName.bind(this);
    this.Change = this.Change.bind(this);
    this.updateUserCrypto = this.updateUserCrypto.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }
  componentDidMount() {
    console.log("Did mount");
    const { id, googleId } = this.props.location.state;

    console.log(id);
    let user = {};
    if (id.hasOwnProperty("email")) {
      user = id;
    } else if (googleId.hasOwnProperty("email")) {
      user = googleId;
    }
    console.log("id = " + id);
    if (id.hasOwnProperty("userId")) {
      console.log("userId found");
      this.setState({
        Mail: user.email,
        FirstName: user.firstname,
        LastName: user.lastname,
        userId: user.userId,
        token: user.token,
        authFromGoogle: false,
      });

      let userCryptoListFromStorage = localStorage.getItem("id");
      userCryptoListFromStorage = JSON.parse(userCryptoListFromStorage);
      let userCryptoList = userCryptoListFromStorage.cryptoList.split(",");
      console.log(userCryptoList);

      if (userCryptoList[0] === "") {
        userCryptoList = [];
      }

      if (userCryptoList.length > 0) {
        userCryptoList.forEach((element) => {
          this.setState((prevState) => ({
            checkedCrypto: prevState.checkedCrypto.set(element, true),
          }));
        });
      }
    } else {
      this.setState({
        Mail: user.email,
        FirstName: user.firstname,
        LastName: user.lastname,
        token: user.token,
        authFromGoogle: true,
      });
      console.log("Auth from google");
    }
  }

  updateUserInfo() {
    axios.defaults.headers.common = {
      Authorization: `bearer ${this.state.token}`,
    };
    axios
      .get(
        process.env.REACT_APP_BACK_API_URL +
          "/api/users/update/info?userId=" +
          this.state.userId +
          "&email=" +
          this.state.Mail +
          "&firstname=" +
          this.state.FirstName +
          "&lastname=" +
          this.state.LastName
      )
      .then((res) => {
        console.log(res);
        this.setState({
          Mail: this.state.Mail,
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
        });
        let local = localStorage.getItem("id");
        local = JSON.parse(local);
        local["email"] = this.state.Mail;
        local["firstname"] = this.state.FirstName;
        local["lastname"] = this.state.LastName;
        localStorage.setItem("id", JSON.stringify(local));

        console.log("redirect = " + this.state.redirect);
        this.setState({ redirect: true });
        console.log("redirect = " + this.state.redirect);
      }) //TODO CHANGER LE STATE
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  }

  updateUserCrypto() {
    let cryptoChoice = "";
    this.state.checkedCrypto.forEach((values, keys) => {
      if (values === true) {
        cryptoChoice = cryptoChoice + keys + ",";
      }
    });
    this.setState(
      {
        userCryptoChoice: cryptoChoice.substring(0, cryptoChoice.length - 1),
      },
      () => {
        console.log(
          "this.state.userCryptoChoice : " + this.state.userCryptoChoice
        );
        axios.defaults.headers.common = {
          Authorization: `bearer ${this.state.token}`,
        };
        axios
          .get(
            process.env.REACT_APP_BACK_API_URL +
              "/api/users/update/crypto?userId=" +
              this.state.userId +
              "&crypto=" +
              this.state.userCryptoChoice
          )
          .then(
            //TODO Check response and change local storage
            (res) => {
              console.log(res);
              let local = localStorage.getItem("id");
              local = JSON.parse(local);
              local["cryptoList"] = this.state.userCryptoChoice;
              localStorage.setItem("id", JSON.stringify(local));
            }
          )
          .catch(function (res) {
            //handle error
            console.log("Error : " + res);
          });
      }
    );
  }

  handleChangeMail(event) {
    this.setState({ Mail: event.target.value });
  }

  ChangeLastName(event) {
    this.setState({ LastName: event.target.value });
  }

  ChangeFirstName(event) {
    this.setState({ FirstName: event.target.value });
  }

  Change(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState((prevState) => ({
      checkedCrypto: prevState.checkedCrypto.set(item, isChecked),
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="preferences">
          <h2>My account</h2>
          <div className="user-info">
            <h3>User info</h3>
            <label>
              Email :<br></br>
              <input
                type="text"
                value={this.state.Mail}
                onChange={this.handleChangeMail}
              />
            </label>
            <label>
              First Name :<br></br>
              <input
                type="text"
                value={this.state.FirstName}
                onChange={this.ChangeFirstName}
              />
            </label>
            <label>
              Last Name :<br></br>
              <input
                type="text"
                value={this.state.LastName}
                onChange={this.ChangeLastName}
              />
            </label>

            <Button onClick={this.updateUserInfo}>Update user info</Button>
          </div>

          <div className="favorites">
            <h3>Your favorites Cryptos :</h3>
            {CurrentCryptos.map((item) => (
              <label className="dispCheckboxes" key={item.key}>
                <span className="span">
                  <Checkbox
                    name={item.name}
                    checked={this.state.checkedCrypto.get(item.name)}
                    onChange={this.Change}
                  />
                </span>
                {item.label}
              </label>
            ))}
            <Button onClick={this.updateUserCrypto}>
              Update Cryto preferences
            </Button>
          </div>
        </div>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: "/",
              state: {
                newUserEmail: this.state.Mail,
                newUserFirstName: this.state.FirstName,
                newUserLastName: this.state.LastName,
              },
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Preferences;
