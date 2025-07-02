import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1);
  }
};
// This function connects to the MongoDB database using Mongoose.
// It logs a success message if the connection is successful, or an error message and exits the process if it fails.