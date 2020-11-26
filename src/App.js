import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import PricesIndexes from "./components/PricesIndexes";
import News from "./components/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
