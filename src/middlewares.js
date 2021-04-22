const log = (req, res, next) => {
  console.log(req.url);
  next();
};

const checkSize = (req, res, next) => {
  if (req.params.param.length > 6) {
    return res.status(403).send("Parametar has more than six characters");
  }
  next();
};

export { log, checkSize };
