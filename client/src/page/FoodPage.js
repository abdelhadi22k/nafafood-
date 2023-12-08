import React, { useEffect } from "react";
import Food from "../components/Food";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { fetchFood } from "../redux/food/foodAction";
import Loding from "../components/utilt/Loding";
import "../styles/food.css";

const FoodPage = ({ fooddata, fetchFood }) => {
  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  return fooddata.loading ? (
    <Loding />
  ) : fooddata.error ? (
    <h2>{fooddata.error}</h2>
  ) : (
    <section className="foodSection">
      <div className="foodPage">
        <div className="">
          <div className="mainFoodInf">
            <h2>Currently famous</h2>
          </div>
          {
            <Container className="">
              <dev className="">
                <div className="">
                  <p>
                    The most important of our services are the services related
                    to the web fimport Food from
                  </p>
                </div>
              </dev>
              <div className="foodContainer">
                {fooddata.food.map((el, index) => {
                  return (
                    <div className="">
                      <div>
                        <Food food={el} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          }
        </div>
      </div>
    </section>
  );
};

const mapstate = (state) => {
  return {
    fooddata: state.food,
  };
};

const mapActction = (dispatch) => {
  return {
    fetchFood: () => dispatch(fetchFood()),
  };
};

export default connect(mapstate, mapActction)(FoodPage);
