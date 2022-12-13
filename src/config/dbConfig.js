import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_CLIENT);

    conn ? console.log("Mongo Connected") : console.log("unable to connect");
  } catch (error) {
    console.log(error);
  }
};
