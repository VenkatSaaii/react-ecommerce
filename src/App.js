import React from "react";

import { Button, Container, Navbar, NavbarBrand } from "react-bootstrap";

import "./App.css";

import Store from "./Store/Store";

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className="justify-content-center">
          <NavbarBrand href="/" className="mr-5">
            Home
          </NavbarBrand>
          <NavbarBrand href="/" className="mx-5">
            Store
          </NavbarBrand>
          <NavbarBrand href="/">About</NavbarBrand>
        </Container>
        <Button variant="dark">Cart</Button>
      </Navbar>

      <Store />
    </>
  );
};

export default App;
