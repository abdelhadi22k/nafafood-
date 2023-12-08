import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loding from "../components/utilt/Loding";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Message from "../components/utilt/Message";
import Rating from "../components/utilt/Rating";
import "../styles/food.css";
import { getError } from "./../handelErorr/Utis";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { domain } from "../confg";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SECCESS":
      return { ...state, food: action.payload, loading: false };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  } 
};

const FoodDetels = () => {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, food }, dispatch] = useReducer(reducer, {
    foods: [],
    loading: true,
    error: "",
  });

  //  for fetch

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `${domain}/api/foodDissh/slug/${slug}`
        );
        dispatch({ type: "FETCH_SECCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);

  const cartItems = useSelector((state) => state.cart.cart.cartItems);
  const dispatchCart = useDispatch();

  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === food._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const data = await axios.get(
      `http://localhost:8000/api/foodDissh/${food._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    dispatchCart({
      type: "CART_ADD_ITEM",
      payload: { ...food, quantity },
    });
  };
  return loading ? (
    <Loding />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="singelFood ">
      <Helmet>
        <title>{food.name}</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <img className="img-large" src={food.image} alt={food.name}></img>
        </Col>
        <Col md={3}>
          <div className="shipping">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>
                  <title>{food.name}</title>
                </h1>
                <h1>{food.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={food.rating}
                  numReviews={food.numReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Pirce : ${food.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:
                <p>{food.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${food.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {food.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {food.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FoodDetels;
