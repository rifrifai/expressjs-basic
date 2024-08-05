const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
} = require("../controllers/categoryController");

// routing
// endpoint bisa sama, asalkan method nya berbeda
// /api/v1/categories
// read data find all
router.get("/", getAllCategories);

// detail data
router.get("/:id", detailCategory);

// create data
router.post("/", storeCategory);

// update data
router.put("/:id", updateCategory);

// kalau ada tambahan di letakan di atas :nama
// /api/v1/categories/filterData
router.get("/filterData", (req, res) => {
  res.send("Route Filter Data");
});

// /api/v1/categories/:nama
router.get("/:nama", (req, res) => {
  res.send(`Endpoint from route params ${req.params.nama}`);
});

module.exports = router;
