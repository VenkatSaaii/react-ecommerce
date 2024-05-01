import React from "react";

import "./Store.module.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Store = () => {
  const products = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <h1 className="cart-text text-center ">The Generics</h1>
      <h2 className="text text-center ">MUSIC</h2>
      <Container className="align-items-center">
        <Row className="justify-content-center">
          <Col md={6}>
            {products.slice(0, 2).map((product, index) => (
              <Col key={index} md={6}>
                <div className="overlay">
                  <div className="text text-center text-bold">
                    Album {index + 1}
                  </div>
                </div>
                <Card className="mb-4 product-card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      className="product-image"
                    />
                  </div>
                  <Card.Body className="p-2" style={{ height: "50px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>${product.price}</p>
                      <Button variant="dark">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
          <Col className="justify-content-around" md={6}>
            {products.slice(2, 4).map((product, index) => (
              <Col key={index} md={6}>
                <div className="overlay">
                  <div className="text text-center">Album {index + 3}</div>
                </div>
                <Card className="mb-4 product-card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      className="product-image"
                    />
                  </div>
                  <Card.Body className="p-2" style={{ height: "50px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>${product.price}</p>
                      <Button variant="dark">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
        </Row>
        <div className=" text-center  mt-4">
          <Button className="seethecart bg-black">See The Cart</Button>
        </div>
      </Container>

      <footer>
        <h3 className="footer">The Generics</h3>
      </footer>
    </>
  );
};

export default Store;
