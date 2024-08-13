const jwt = require("jsonwebtoken");
const { Siswa } = require("../models");

exports.authMiddleware = async (req, res, next) => {
  // 1- fungsi jika di header kita masukan token atau tidak
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      res.status(401).json({
        status: 401,
        message: "Login/ Register required",
      })
    );
  }
  // console.info(token);
  // 2- decode verify token
  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(
      res.status(401).json({
        error: err,
        message: "Invalid Token",
      })
    );
  }

  // 3- ambil data user berdasarkan kondisi decoded
  const currentSiswa = await Siswa.findByPk(decoded.id);
  console.info(currentSiswa);

  req.siswa;

  next();
};
