import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar>
            <Link to="/">
              <h3 className="mt-2">Notes</h3>
            </Link>
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav className="m-auto">
                <Link to="/mynotes">My Notes</Link>
              </Nav>
              <NavDropdown title="User" id="navbarScrollingDropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
