import Blog from "../models/blog.js";

import express from "express";
import expressAsyncHandler from "express-async-handler";

const route = express.Router();

route.get("/", async (req, res) => {
  const blog = await Blog.find();
  res.send(blog);
});

route.get(
  "/category",
  expressAsyncHandler(async (req, res) => {
    const category = await Blog.find().distinct("category");
    res.send(category);
  })
);

route.get("/categorys/:category", async (req, res) => {
  const blog = await Blog.find({ category: req.params.category });
  if (blog) {
    res.send(blog);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.get("/slug/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (blog) {
    res.send(blog);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.send(blog);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.post("/addBlog", async (req, res) => {
  const blog = new Blog({ 
    image: req.body.image,
    name: req.body.name,
    titls: req.body.titls,
    howPrepare: req.body.howPrepare,
    Ingredients: req.body.Ingredients,
    KitchenClass: req.body.KitchenClass,
    FoodClass: req.body.FoodClass,
    kitchen: req.body.kitchen,
    category: req.body.category,
    slug: req.body.slug,
    details: req.body.details,
    description: req.body.description,
  });

  await blog.save();
  res.send(blog);
});

route.put("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
        image: req.body.image,
        name: req.body.name,
        titls: req.body.titls,
        howPrepare: req.body.howPrepare,
        Ingredients: req.body.Ingredients,
        KitchenClass: req.body.KitchenClass,
        FoodClass: req.body.FoodClass,
        kitchen: req.body.kitchen,
        category: req.body.category,
        slug: req.body.slug,
        details: req.body.details,
        description: req.body.description,
    },
    { new: true }
  );
  if (!blog) {
    return res.status(404).send(`we dont have her this food`);
  }
  res.send(blog);
});

route.delete("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);

  if (!blog) {
    return res.status(404).send(`we dont have her this food `);
  }
  res.send(blog);
});

export default route;
