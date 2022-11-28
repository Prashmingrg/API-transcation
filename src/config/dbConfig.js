import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/aug_transaction";
    const conn = mongoose.connect(connStr);

    conn ? console.log("Mongo Connected") : console.log("unable to connect");
  } catch (error) {
    console.log(error);
  }
};
