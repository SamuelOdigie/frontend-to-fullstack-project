import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { getAllProducts } from "../apis/product";
import { Link } from "wouter";
import Cart from "./Cart";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [, setShowCart] = useState(false);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const handleAddToCart = (product) => {
    setShowCart(true);
    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart") || "[]"),
        product,
      ])
    );
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>£{product.price} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
      {<Cart setShowCart={setShowCart} />}
      <Link href="/cart">
        <Button variant="secondary" className="mt-3">
          View Cart
        </Button>
      </Link>
    </div>
  );
};

export default ProductPage;
