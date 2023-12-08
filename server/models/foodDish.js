import mongoose from "mongoose";

const foodDishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    food: { type: String, required: true },
    country: { type: String, required: true },
    category: { type: String, required: true },
    classFood: { type: String, required: true }, 
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

 const FoodDissh = mongoose.model('FoodDissh',foodDishSchema);

 export default FoodDissh