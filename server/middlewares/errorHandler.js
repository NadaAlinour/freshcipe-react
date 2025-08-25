export default function errorHandler(err, res, req, next) {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    error: message,
  });
}
