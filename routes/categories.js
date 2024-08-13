const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { authMiddleware } = require("../middleware/UserMiddleware");

// routing
// endpoint bisa sama, asalkan method nya berbeda
// /api/v1/categories
// read data find all
router.get("/", getAllCategories);

// sebelum detail data akan melewati middleware dahulu
router.get("/:id", authMiddleware, detailCategory);

// create data
router.post("/", storeCategory);

// update data
router.put("/:id", updateCategory);

// delete data
router.delete("/:id", deleteCategory);

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
