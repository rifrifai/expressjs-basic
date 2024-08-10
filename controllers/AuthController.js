const { Siswa } = require("../models");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.registerSiswa = async (req, res) => {
  try {
    // jangan menggunakan variable saat signup or logging in because some attackers can access tha variable
    // let { name, email, password, passwordConfirm } = req.body;

    if (req.body.password != req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Validation Error",
        error: ["Password and Password Confirmation do not match"],
      });
    }

    const newSiswa = await Siswa.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const token = signToken(newSiswa.id);

    return res.status(200).json({
      status: "Register Success",
      token,
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

exports.loginSiswa = async (req, res) => {
  // 1-fungsi validasi
  if (!req.body.email || !req.body.password) {
    return res.send(400).json({
      status: "Fail",
      message: "Validation Error",
      error: "email and password are required",
    });
  }

  // 2-cek jika email siswa yang di masukan di req sudah ada di database dan password sudah sesuai
  const siswaData = await Siswa.findOne({ where: { email: req.body.email } });

  if (
    !siswaData ||
    !(await siswaData.CorrectPassword(req.body.password, siswaData.password))
  ) {
    return res.status(400).json({
      status: "Fail",
      message: "Login Failed",
      error: "Invalid Email or Password",
    });
  }

  // 3-token di res pada login
  const token = signToken(siswaData.id);
};
