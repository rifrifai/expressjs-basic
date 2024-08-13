const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  // 1- fungsi jika di header kita masukan token atau tidak
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
};
