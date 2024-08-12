const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bannerRoutes = require("./routes/bannerRoutes");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(bodyParser.json());

app.use("/api/banner", bannerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
