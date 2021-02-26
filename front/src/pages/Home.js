import React from 'react';
import { Navbar, Nav, Button, Form, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home () {
    return (<div> 
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Fittness App Demo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Nav.Link href="/Login">Login</Nav.Link>
        <Nav.Link href="#home">Sign Up</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  <Jumbotron>
    <h1>Fitness Workout Log</h1>
    <p>
      Reach your personal goals, Get Connected with a trainer today.
</p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  </div>);
}

export default Home;