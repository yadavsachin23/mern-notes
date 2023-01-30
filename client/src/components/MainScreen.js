import React from "react";
import { Container, Row } from "react-bootstrap";
import './mainscreen.css'

export default function MainScreen({ title, children }) {
  return (
    <div className="mainbg">
      <Container>
        <Row>
          <div className="page">
            {title ? <h1 className="heading">This is title</h1> : <h2>Nothing</h2>}
            <hr/>
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}
