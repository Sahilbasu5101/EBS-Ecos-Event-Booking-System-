const notFound = (req, res) => {
  res.status(404).json({
    success : false,
    message : `Route not found : ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success : false,
    message : "Internal server error",
  });
};

module.exports = {
  notFound,
  errorHandler,
}
