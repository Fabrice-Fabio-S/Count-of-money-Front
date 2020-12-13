import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricesIndexes from "./components/PricesIndexes";
import News from "./components/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Preferences from "./components/Preferences";
import Article from "./components/Article";
import CryptoInfo from "./components/CryptoInfo";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import "./App.css";

function App() {
  let location = useLocation();
  let history = useHistory();
  // State
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") || false
  );
  const [id, setId] = useState(localStorage.getItem("id") || {});
  const [googleId, setGoogleId] = useState(
    localStorage.getItem("googleId") || {}
  );
  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // HANDLE MAIL CHANGE
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  // HANDLE PASSWORD CHANGE
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // LOGOUT
  const handleLogout = () => {
    setIsLogged(false);
    setId({});
    setGoogleId({});
    localStorage.clear();
    console.log("---- Logout ----");
  };

  // LOGIN
  const handleSubmit = (e) => {
    e.preventDefault();

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
      .post(process.env.REACT_APP_BACK_API_URL + "/api/login", user)
      .then((res) => {
        if (res.data.statusCode === 200) {
          console.log("Reponse recu : " + JSON.stringify(res.data, null, 4));
          setId(res.data.data);
          setIsLogged(true);
          localStorage.setItem("id", JSON.stringify(res.data.data));
          localStorage.setItem("isLogged", true);
          setErrorMsg("");
        } else {
          console.log("Authentification error");
          setErrorMsg("Your email or your password is incorrect");
        }
      })
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  };

  useEffect(() => {
    // HANDLE GOOGLE AUTH
    let searchParams = new URLSearchParams(location.search);
    if (searchParams.get("token") !== null) {
      let googleId = {
        lastname: searchParams.get("lastname"),
        firstname: searchParams.get("firstname"),
        email: searchParams.get("email"),
        token: searchParams.get("token"),
      };
      console.log(googleId);
      setGoogleId(googleId);
      setIsLogged(true);
      localStorage.setItem("googleId", JSON.stringify(googleId));
      localStorage.setItem("isLogged", true);
      searchParams.delete("lastname", "firstname", "email", "token");
      history.replace({
        search: null,
      });
    }
  }, [location, history]);

  useEffect(() => {
    console.log(location);
    let newId = id;
    if (location.state !== undefined) {
      if (
        location.state.newUserEmail !== undefined &&
        location.state.newUserFirstName !== undefined &&
        location.state.newUserLastName !== undefined
      ) {
        const {
          newUserEmail,
          newUserFirstName,
          newUserLastName,
        } = location.state;
        //TODO mettre à jour le state avec les new infos
        // console.log(id);
        // console.log(newUserEmail, newUserFirstName, newUserLastName);

        newId["email"] = newUserEmail;
        newId["firstname"] = newUserFirstName;
        newId["lastname"] = newUserLastName;
        setId(newId);
        console.log(id);
      }
    }
  }, [location, id]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        id,
        googleId,
        Mail,
        Password,
        handleSubmit,
        handleChangePassword,
        handleChangeMail,
        handleLogout,
        errorMsg,
      }}
    >
      <div className="App">
        <div className="background-opacity">
          <Container fluid>
            <Row>
              <Header />
            </Row>
            <Container>
              <Col className="main-content">
                <Row>
                  <Switch>
                    <PrivateRoute
                      path="/profile"
                      component={Preferences}
                    ></PrivateRoute>
                    <PublicRoute
                      restricted={true}
                      path="/login"
                      component={Login}
                    />
                    <PublicRoute
                      restricted={true}
                      path="/signup"
                      component={SignUp}
                    />
                    <Route path="/crypto/:cmid">
                      <CryptoInfo />
                    </Route>
                    <Route path="/articles/:id">
                      <Article />
                    </Route>
                    <Route exact path="/">
                      <PricesIndexes />
                      <News />
                    </Route>
                  </Switch>
                </Row>
              </Col>
            </Container>
            <Footer />
          </Container>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
