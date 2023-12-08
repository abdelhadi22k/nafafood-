import React from "react";
import FoodSlider from "../components/FoodSlider";
import FoodPage from "./FoodPage";
import FoodMenu from "./FoodMenu";
import { Helmet } from 'react-helmet-async';

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <FoodSlider />
      <FoodPage />
      <FoodMenu />
    </div>
  );
};

export default MenuPage;
