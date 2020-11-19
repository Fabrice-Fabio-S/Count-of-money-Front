import { Button, Col, Row, Container } from "react-bootstrap";
import "./Header.css";

function Header(props) {
  const { isLogged } = props;

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={9}>
            <h1>COUNT OF MONEY</h1>
          </Col>
          <Col lg={3}>
            {isLogged ? (
              <div>
                <Button>My account</Button>
                <Button>Logout</Button>
              </div>
            ) : (
              <div>
                <Button>Login</Button>
                <Button>Signup</Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
