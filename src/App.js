import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricesIndexes from "./components/PricesIndexes";
import News from "./components/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import axios from "axios";

import "./App.css";

function App() {
  // State
  const [isLogged, setIsLogged] = useState(false);
  const [id, setId] = useState({});
  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  // Handle
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogout = () => {
    setIsLogged(false);
    setId({});
    localStorage.clear();
    console.log("---- Logout ----");
  };
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
      .post("http://localhost:3000/api/login", user)
      .then((res) => {
        console.log("Reponse recu : " + JSON.stringify(res.data.data, null, 4));
        setId(res.data.data);
        setIsLogged(true);
        localStorage.setItem("id", res.data.data);
        localStorage.setItem("isLogged", true);
      })
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        id,
        Mail,
        Password,
        handleSubmit,
        handleChangePassword,
        handleChangeMail,
        handleLogout,
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
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/signup">
                      <SignUp />
                    </Route>
                    <Route path="/">
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
