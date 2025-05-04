//This middleware handles errors in the application.
// It captures any errors that occur during the request-response cycle and sends a 
// JSON response with the error message and status code.
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({ message: err.message });
  };
  