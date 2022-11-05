const errorHandler = (err: any, req: any, res: any, next: any) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
    code: error.code || 500,
    results: error,
  });
};

export default errorHandler;
