const { Category } = require("../models/");

exports.getAllCategories = (req, res) => {
  // console.info(req.reqTime);
  res.status(200).json({
    status: "success",
    data: [
      {
        id: 1,
        name: "IPhone",
      },
      {
        id: 2,
        name: "PC",
      },
      {
        id: 3,
        name: "Tablet",
      },
    ],
  });
};

// membuat validasi
exports.storeCategory = async (req, res) => {
  // let name = req.body.name;
  // let description = req.body.description;

  try {
    let { name, description } = req.body;
    const newCategory = await Category.create({
      name,
      description,
      // bisa sekali pemanggilan asal namanya sama dengan enhanced object literals
      // name
      // description
    });
    res.status(201).json({
      status: "success",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Fail",
      error: error.errors,
    });
  }
};
