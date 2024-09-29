// const imgUpload = async function () {
//   // Configuration
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARAY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARAY_API_KEY,
//     api_secret: process.env.CLOUDINARAY_API_SECRET, // Click 'View API Keys' above to copy your API secret
//   });

//   // Upload an image
//   const uploadResult = await cloudinary.uploader
//     .upload(
//       "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//       {
//         public_id: "shoes",
//       },
//     )
//     .catch((error) => {
//       console.log(error);
//     });

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url("shoes", {
//     fetch_format: "auto",
//     quality: "auto",
//   });

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url("shoes", {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500,
//   });
// };
// const publicId = 'WIN_20230228_02_35_33_Pro_hjxhne';
// const url = cloudinary.url(publicId);

// export default imgUpload;
//********************************************************************************************* */
// import "dotenv/config";
// import { v2 as cloudinary } from "cloudinary";

// // Configuration
// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET, // Ensure these environment variables are set
// // });
// cloudinary.config({
//   cloud_name: "dzjpgkp7h",
//   api_key: "877184232763169",
//   api_secret: "hTO-6OGEc1Q1y-X8cy3pRV98zrg", // Ensure these environment variables are set
// });

// const imgUpload = async function () {
//   try {
//     // Upload an image
//     const uploadResult = await cloudinary.uploader.upload(
//       "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//       {
//         public_id: "shoes",
//       },
//     );

//     console.log("Upload Result:", uploadResult);

//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url("shoes", {
//       fetch_format: "auto",
//       quality: "auto",
//     });

//     console.log("Optimized URL:", optimizeUrl);

//     // Transform the image: auto-crop to square aspect ratio
//     const autoCropUrl = cloudinary.url("shoes", {
//       crop: "auto",
//       gravity: "auto",
//       width: 500,
//       height: 500,
//     });

//     console.log("Auto-Cropped URL:", autoCropUrl);
//   } catch (error) {
//     console.log("Error uploading image:", error);
//   }
//   const url = cloudinary.url("WIN_20230228_02_35_33_Pro_hjxhne");
//   console.log(url);
// };

// // Example usage of generating a URL for an existing image

// export default imgUpload;

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export  default { uploadOnCloudinary };
