import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ohlala",
  });
});

export { registerUser };

// get user details from frontend
// validation of all data like not empty
// check if user already exists: using username and email
// check for images and check for avatar
// upload them to cloudinary,avatar and get cloudinary url
// create user object --- create entry in db
// remove password and refresh token from response
// check for user creation
// return res
// const { fullName, username, email, password } = res.body;
// console.log("email :", email);
// console.log("Aman");
