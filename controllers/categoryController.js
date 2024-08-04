const { Category } = require("../models/");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({
      status: "Success",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Error",
    });
  }

  // console.info(req.reqTime);
  // dummy data
  // res.status(200).json({
  //   status: "success",
  //   data: [
  //     {
  //       id: 1,
  //       name: "IPhone",
  //     },
  //     {
  //       id: 2,
  //       name: "PC",
  //     },
  //     {
  //       id: 3,
  //       name: "Tablet",
  //     },
  //   ],
  // });
};

exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(400).json({
        status: "Fail",
        error: "Data Not Found",
      });
    }

    return res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Error",
    });
  }
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
