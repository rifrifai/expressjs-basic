const express = require("express");
const app = express();
const port = 3000;

// routing
// endpoint bisa sama, asalkan method nya berbeda
app.get("/api/v1/categories", (req, res) => {
  res.send("Hello World GET");
});

app.post("/api/v1/categories", (req, res) => {
  res.send("Hello From POST");
});

// server
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
