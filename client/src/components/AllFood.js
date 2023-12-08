import React, { useEffect, useState } from "react";
import "../styles/food.css";
import Rating from "./utilt/Rating";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const AllFood = ({ allFood }) => { 
  const [quantity, setCount] = useState(1);

  const [food, setFood] = useState([]);

  useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/foodDissh`);
        setFood(data);

        console.log(data);
      } catch (err) {
        console.log(err);
      } 
    }
    fetchFood();
  }, []);

  const addCount = () => {
    const newCount = quantity + 1;
    setCount(newCount);
  };
  const decreaseCount = () => {
    if (quantity >= 2) {
      const newCount = quantity - 1;
      setCount(newCount);
    } else {
      return;
    }
  }; 

  const dispatch = useDispatch();

  const addToCart = async () => {
    if (food && food.length > 0) {
      const existItem = food.find((x) => x._id === allFood._id);
      const quantitys = existItem ? existItem.quantity + 1 : 1;
      if (quantitys) {
      }
      if (existItem) {
        const { data } = await axios.get(
          `http://localhost:8000/api/foodDissh/${existItem._id}`
        );

        dispatch({
          type: "CART_ADD_ITEM",
          payload: { ...data, quantity },
        });
        console.log(data);
      } else {
        console.log("Item not found in food array");
      }
    } else {
      console.log("Food data not loaded");
    }
  };

  return (
    <div className="allfoodBox">
      <div className="allfoodhoder">
        <div className="allfoodImghode">
          <Link to={`/menu/${allFood.slug}`}>
            <img
              className="allfoodImg"
              src={`${allFood.image}`}
              alt={allFood.name}
            />
          </Link>
        </div>
        <div className="allfoodInfohode">
          <div>
            <Link to={`/menu/${allFood.slug}`}>
              <h1>{allFood.name}</h1>
            </Link>
            <div className="allfoodInfo">
              <div>
                <Rating rating={allFood.rating} />
                <span className="reviewsspan"></span>
                {allFood.numReviews} reviews
              </div>
              <p>{allFood.description}</p>
            </div>
          </div>

          <div className="allfoodButton">
            <div className="allfoodOrder">
              <button onClick={addToCart} className="orderButton">
                Add to Cart
              </button>
            </div>
            <div className="allfoodPrice">
              <samp className="sampBorder">Price</samp>
              <samp className="sampB">{allFood.price} $</samp>
            </div>
            <div className="allfoodQuantity">
              <samp className="sampBorder">Quantity</samp>
              <div>
                <button onClick={decreaseCount} className="orderButton">
                  -
                </button>
                <span className="qontur">{quantity}</span>
                <button onClick={addCount} className="orderButton">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Ling"></div>
    </div>
  );
};

export default AllFood;
