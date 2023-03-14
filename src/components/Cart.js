import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";

const Cart = ({ setShowCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const removeFromCart = (product) => {
    const newCart = cart.filter((p) => p.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, p) => total + p.price, 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          <div className="row">
            {cart.map((product) => (
              <Col md={4} key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price} USD</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
          <div>
            <h4>Total Price: £ {totalPrice} </h4>
            <Button variant="success" onClick={() => setShowCart(false)}>
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
