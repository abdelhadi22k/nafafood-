import React from "react";
import { Link } from "react-router-dom";
import Rating from "./utilt/Rating";
import "../styles/food.css";

const Food = ({ food }) => {
  return (
    <Link className="" to={`/menu/${food.slug}`}>
      <div className="foodBox">
        <img className="foodImg" src={`${food.image}`} alt={food.image} />

        <div className="foodInfo">
          <h6>{food.name}</h6> 
          <div>
            <Rating rating={food.rating} />
            {food.numReviews} reviews
          </div>
        </div>
        <div className="foodInfoOpsty"></div>
      </div>
    </Link>
  );
};
export default Food;
