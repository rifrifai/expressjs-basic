// it's entry point
const express = require("express");
const app = express();
const port = 3000;
const CategoriesRouter = require("./routes/categories");
const morgan = require("morgan");

// middleware
app.use(express.json());
// app.use((req, res, next) => {
//   req.reqTime = new Date().toISOString();
// next digunakan untuk melanjutkan ke code berikutnya
//   next();
// });

// cors berfungsi juga agar endpoint bisa diakses dari luar(fe)
app.use(morgan("dev"));

// routing
app.use("/api/v1/categories", CategoriesRouter);

// server
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
