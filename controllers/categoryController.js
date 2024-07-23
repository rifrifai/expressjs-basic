exports.getAllCategories = (req, res) => {
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
exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (!name && !description) {
    return res.status(400).json({
      status: "Failed",
      error: "name and description is required!",
    });
  }
  return res.status(200).json({
    status: "Success",
    message: "Validation Success",
  });
};
