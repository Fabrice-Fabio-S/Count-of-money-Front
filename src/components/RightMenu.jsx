import "./RightMenu.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { Col } from "react-bootstrap";

function RightMenu(props) {
  return (
    <div className="right-menu">
      <Col>
        <h2>Right Menu Component</h2>
        <Login />
        <SignUp />
      </Col>
    </div>
  );
}

export default RightMenu;
