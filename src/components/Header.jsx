import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Header.css";

function Header(props) {
  return (
    <AuthContext.Consumer>
      {({ isLogged, handleLogout, id }) => (
        <div className="header">
          <Container fluid>
            <Row>
              <Col md={7} className="header-title">
                <Link to="/" className="ml-auto">
                  <h1>COUNT OF MONEY</h1>
                </Link>
              </Col>
              <Col md={5}>
                {isLogged ? (
                  <div className="header-button">
                    <Link to="/user">
                      <Button>
                        <i className="fas fa-address-card"></i> My account
                      </Button>
                    </Link>
                    <Link to="/logout">
                      <Button onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                      </Button>
                    </Link>
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
                {id.firstname ? (
                  <div>
                    <em>
                      Hello {id.firstname} {id.lastname}
                    </em>
                  </div>
                ) : null}
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default Header;
