const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const detailRoute = require("./routes/detailRoutes");
const url =
  "mongodb+srv://vinod:vinod@cluster0.mtkf1.mongodb.net/InvestWithTribe";

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected ..");
  })
  .catch((err) => {
    console.log("Error connecting database ..", err);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/detail", detailRoute);

app.listen(9000, () => {
  try {
    console.log("Server started ..");
  } catch (err) {
    console.log("Error connecting server ..", err);
  }
});
