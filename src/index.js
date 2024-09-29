import "dotenv/config"; // This replaces `require('dotenv').config()` in ES modules
import connectDB from "./db/index.js";
import app from "./app.js";
import uploadOnCloudinary from "./utils/cloudinary.js"; // Use the correct path and filename

connectDB();

// Connect to the database

// Start the Express app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
