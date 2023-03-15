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
      <Carousel style={{ width: "100%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.guim.co.uk/img/media/29574a5fc4538544de79febe40a365392267baf5/0_0_2500_1667/master/2500.jpg?width=1300&quality=85&dpr=1&s=none"
            alt="First slide"
            height="500"
            width="1200"
          />
          <Carousel.Caption>
            <h3>Welcome to Tokyo Thrift</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp4502922.jpg"
            alt="Second slide"
            height="500"
            width="1200"
          />
          <Carousel.Caption>
            <h3>Welcome to Tokyo Thrift</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW8lMjBuZW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Third slide"
            height="500"
            width="1200"
          />
          <Carousel.Caption>
            <h3>Welcome to Tokyo Thrift</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Featured Products
      </h2>
      <div className="row justify-content-center" style={{ marginTop: "20px" }}>
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: £{product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCart(product)}
                  className="neon-pink-btn"
                >
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
