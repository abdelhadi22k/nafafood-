import FoodDissh from "../models/foodDish.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

const route = express.Router();

route.get("/", async (req, res) => {
  const food = await FoodDissh.find();
  res.send(food);
});
 
route.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await FoodDissh.find().distinct("category");
    res.send(categories);
  })
);

const PAGE_SIZE = 3;
route.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};

    const categoryFilter = category && category !== "all" ? { category } : {};
    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    const priceFilter =
      price && price !== "all"
        ? {
            // 1-50
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};
    const sortOrder =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };

    const food = await FoodDissh.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countFood = await FoodDissh.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      food,
      countFood,
      page,
      pages: Math.ceil(countFood / pageSize),
    });
  })
);

route.get(
  "/category",
  expressAsyncHandler(async (req, res) => {
    const category = await FoodDissh.find().distinct("category");
    res.send(category);
  })
);

route.get("/randomItems", async (req, res) => {
  try {
    const food = await FoodDissh.aggregate([{ $sample: { size: 8 } }]); // استرجاع 5 عناصر عشوائية
    res.json(food);
  } catch (error) {
    console.error("حدث خطأ في الاستعلام:", error);
    res.status(500).json({ message: "حدث خطأ في الخادم" });
  }
});

route.get("/categorys/:category", async (req, res) => {
  const food = await FoodDissh.find({ category: req.params.category });
  if (food) {
    res.send(food);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.get("/slug/:slug", async (req, res) => {
  const food = await FoodDissh.findOne({ slug: req.params.slug });
  if (food) {
    res.send(food);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.get("/:id", async (req, res) => {
  const food = await FoodDissh.findById(req.params.id);
  if (food) {
    res.send(food);
  } else {
    res.status(404).send({ message: "food Not Found" });
  }
});

route.post("/addfoods", async (req, res) => {
  const food = new FoodDissh({
    name: req.body.name,
    slug: req.body.slug,
    image: req.body.image,
    country: req.body.country,
    classFood: req.body.classFood,
    food: req.body.food,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });

  await food.save();
  res.send(food);
});

route.put("/:id", async (req, res) => {
  const food = await FoodDissh.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      country: req.body.country,
      category: req.body.category,
      classFood: req.body.classFood,
      food: req.body.food,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    },
    { new: true }
  );
  if (!food) {
    return res.status(404).send(`we dont have her this food`);
  }
  res.send(food);
});

route.delete("/:id", async (req, res) => {
  const food = await FoodDissh.findByIdAndRemove(req.params.id);

  if (!food) {
    return res.status(404).send(`we dont have her this food `);
  }
  res.send(food);
});

export default route;
