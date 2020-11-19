import { Button, Col, Row, Container } from "react-bootstrap";
import "./Header.css";

function Header(props) {
  const { isLogged } = props;

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={8}>
            <h1>COUNT OF MONEY</h1>
          </Col>
          <Col lg={4}>
            {isLogged ? (
              <div className="d-flex justify-content-end">
                <Button>
                  <i class="fas fa-address-card"></i> My account
                </Button>
                <Button>
                  <i class="fas fa-sign-out-alt"></i> Logout
                </Button>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <Button>
                  <i class="fas fa-sign-in-alt"></i> Login
                </Button>
                <Button>
                  <i class="fas fa-user-plus"></i> Signup
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
