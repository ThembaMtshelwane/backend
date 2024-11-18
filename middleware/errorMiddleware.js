const notFound = (req, res, next) => {
  const error = new Error`not Found -${req.originalUrl}`();
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 2000 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name == "CastError" && err.kind === "ObjectId") {
    let statusCode = 404;
    let message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
