import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { loginAction } from "../../redux/actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ message }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAction(userName, password));
  };

  return (
    <Container fluid>
      <div>
        <Form className="mt-lg-5">
          <Row className="justify-content-lg-center items-align-lg-center">
            <Col lg="4">
              <Form.Group>
                <Col>
                  <Form.Label>UserName:</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group>
                <Col>
                  <Form.Label>Password:</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group>
                <Col>
                  <Row>
                    <Col>
                      <Button variant="primary" onClick={handleLogin}>
                        Login
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <h3>{message}</h3>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
