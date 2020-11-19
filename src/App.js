import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import PricesIndexes from "./components/PricesIndexes";
import RightMenu from "./components/RightMenu";
import News from "./components/News";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Container>
          <Row>
            <Col lg={9} className="main-content">
              <h2>Main content</h2>
              <Col>
                <Row>
                  <PricesIndexes />
                </Row>
                <Row>
                  <News />
                </Row>
              </Col>
            </Col>
            <Col lg={3}>
              <RightMenu />
            </Col>
          </Row>
        </Container>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
