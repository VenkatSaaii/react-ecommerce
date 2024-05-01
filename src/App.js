import React, { useState } from "react";

import { Button, Container, Navbar, NavbarBrand } from "react-bootstrap";

import "./App.css";

import Store from "./Store/Store";

import Cart from "./Cart/Cart";

const App = () => {
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  };

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
        <Button variant="dark" onClick={toggleCart}>
          Cart
        </Button>
      </Navbar>
      {showCart && (
        <Cart cartElements={cartElements} removeFromCart={removeFromCart} />
      )}

      <Store />
    </>
  );
};

export default App;
