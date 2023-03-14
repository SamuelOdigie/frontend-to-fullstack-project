import React, { useState, useEffect } from "react";
import { getAllProducts } from "../apis/product";
import { Carousel, Card, Button } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      console.log(response.data);
      setProducts(response.data.products.slice(0, 3));
    });
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Welcome+to+Ecommerce"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Ecommerce</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Ecommerce</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Ecommerce</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2>Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
