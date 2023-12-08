// lib

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// routes
import blog from "./routers/blog.js";
import user from "./routers/user.js";
import foodDissh from "./routers/foodDissh.js";
import orders from "./routers/order.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4444;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/foodDissh", foodDissh);
app.use("/api/orders", orders);
app.use("/api/users", user);
app.use("/api/blog", blog);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("hello worled");
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
    console.log("Connect");
  })
  .catch((err) => {
    console.log(`Filde` + err);
  });
