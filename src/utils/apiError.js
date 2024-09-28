class ApiError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent `Error` constructor
    this.statusCode = statusCode; // Custom property to hold the HTTP status code
    this.name = this.constructor.name; // Name of the error class (for better stack traces)

    // Capture the stack trace (optional)
    Error.captureStackTrace(this, this.constructor);
  }
}
