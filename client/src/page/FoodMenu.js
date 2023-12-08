import React, { useEffect, useState } from "react";
import Loding from "../components/utilt/Loding";
import AllFood from "../components/AllFood";
import { Container } from "react-bootstrap";
import axios from "axios";
import { domain } from './../confg';

const FoodMenu = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(`${domain}/api/foodDissh`);
        setFood(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchFood();
  }, []);
  return loading ? (
    <Loding />
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <Container>
      {
        <div>
          {food.map((el, index) => {
            return (
              <div key={index}>
                <AllFood allFood={el} /> 
              </div>
            );
          })}
        </div>
      }
    </Container>
  );
};

export default FoodMenu;
