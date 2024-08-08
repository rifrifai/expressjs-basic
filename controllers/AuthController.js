const { Siswa } = require("../models");

exports.registerSiswa = async (req, res) => {
  try {
    let { name, email, password, passwordConfirm } = req.body;

    if (password != passwordConfirm) {
      return res.status(400).json({
        message: "Password and Password Confirmation do not match",
      });
    }

    const newSiswa = await Siswa.create({
      name,
      email,
      password,
    });

    return res.status(200).json({
      status: "Success",
      data: newSiswa,
    });
  } catch (error) {
    console.info(error);
    return res.status(400).json({
      message: "Validation Error",
      error,
    });
  }
};
