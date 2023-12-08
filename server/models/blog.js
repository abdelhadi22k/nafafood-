import mongoose from "mongoose";

const prepareDetails = new mongoose.Schema({
  step: { type: String, required: true },
  description: { type: String, required: true },
  prepareimg: { type: String, required: true },
});

const blogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    titls: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    howPrepare: [prepareDetails],
    Ingredients: { type: String, required: true,  },
    KitchenClass: { type: String, required: true,  },
    FoodClass: { type: String, required: true,  },
    kitchen: { type: String, required: true },
    category: { type: String, required: true },
    details: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
