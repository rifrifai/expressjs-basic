const express = require("express");
const app = express();
const port = 3000;
const CategoriesRouter = require("./routes/categories");

// middleware
app.use(express.json());

// routing
app.use("/api/v1/categories", CategoriesRouter);

// server
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
