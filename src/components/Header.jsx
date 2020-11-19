import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { isLogged } = props;

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={8} className="d-flex justify-content-start">
            <Link to="/">
              <h1>COUNT OF MONEY</h1>
            </Link>
          </Col>
          <Col lg={4}>
            {isLogged ? (
              <div className="d-flex justify-content-end">
                <Link to="/user">
                  <Button>
                    <i className="fas fa-address-card"></i> My account
                  </Button>
                </Link>
                <Button>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Button>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <Link to="/login">
                  <Button>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button>
                    <i className="fas fa-user-plus"></i> Signup
                  </Button>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
