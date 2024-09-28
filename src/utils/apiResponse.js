class ApiResponse {
  constructor(statusCode, data = null, message = "") {
    this.statusCode = statusCode; // HTTP status code
    this.data = data; // Response data
    this.message = message; // Optional message
  }

  // Method to send the response
  send(res) {
    res.status(this.statusCode).json({
      status: this.statusCode < 400 ? "success" : "error", // Determine if the response is a success or an error
      message: this.message,
      data: this.data,
    });
  }
}
 