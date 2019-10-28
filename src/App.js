
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoCreate from "../src/Componets/todocreate";
import TodoEdit from "../src/Componets/todoedit";
import TodoList from "../src/Componets/todolist";
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class App extends Component {

  render() {
    return (

      <Router>
    




          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Todo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">View Todo List</Nav.Link>
      <Nav.Link href="/edit/:id">Edit Todo </Nav.Link>
      <Nav.Link href="/create">Create Todo </Nav.Link>
   
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Contact us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>














          <Route path="/" exact component={TodoList}  />
          <Route path="/edit/:id"  component={TodoEdit}  />
          <Route path="/create" component={TodoCreate}  />

      </Router>
    );
  }
}


export default App;

