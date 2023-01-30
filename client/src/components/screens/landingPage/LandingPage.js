import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="main">
      <Container>
        <div id="outer">
          <div id="inner" className="p-5">
            <h1>Welcome to Notes 📔 </h1>
            <h6 className="mt-4">One safe place for all your Notes</h6>
            <div>
              <Row className="mt-3 p-2">
                <Col>
                  <Button>Login</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary">Sign Up</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
