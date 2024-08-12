const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bannerRoutes = require("./routes/bannerRoutes");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Visitor IP: ${ip}`);
  next();
});

let visitorCount = 0;

app.use((req, res, next) => {
  visitorCount++;
  console.log(`Visitor count: ${visitorCount}`);
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/banner", bannerRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
