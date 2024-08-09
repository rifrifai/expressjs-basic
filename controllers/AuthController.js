const { Siswa } = require("../models");

exports.registerSiswa = async (req, res) => {
  try {
    // jangan menggunakan variable saat signup or logging in because some attackers can access tha variable
    // let { name, email, password, passwordConfirm } = req.body;

    if (req.body.password != req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Validation Error",
        error: "Password and Password Confirmation do not match",
      });
    }

    const newSiswa = await Siswa.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(200).json({
      status: "Register Success",
      data: newSiswa,
    });
  } catch (error) {
    console.info(error);
    return res.status(400).json({
      message: "Validation Error",
      error: error.errors.map((err) => err.message),
    });
  }
};
