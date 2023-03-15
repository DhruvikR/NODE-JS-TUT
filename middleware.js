module.exports = reqFilter = (req, res, next) => {
  if (req.query.age < 10) {
    res.send("<h1>You are under aged.</h1>");
  } else if (!req.query.age) {
    res.send("<h1>Please Provide age.</h1>");
  } else {
    next();
  }
};
