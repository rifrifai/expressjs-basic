// it's entry point
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const CategoriesRouter = require("./routes/categories");
const morgan = require("morgan");

dotenv.config();

// middleware
app.use(express.json());
// app.use((req, res, next) => {
//   req.reqTime = new Date().toISOString();
// next digunakan untuk melanjutkan ke code berikutnya
//   next();
// });

// cors berfungsi juga agar endpoint bisa diakses dari luar(fe)
app.use(morgan("dev"));
app.use(cors());

// routing
app.use("/api/v1/categories", CategoriesRouter);

// server
const port = process.env.PORT;
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
