import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connection Initialized!`);
  } catch (error) {
    console.log("Error in \"database.js\":", error);
    process.exit(1);
  }
};
export default connectDatabase;
