import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import path from "path";
// import { isAuth } from "./src/middleware/authMiddleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.port || 8000;

//midlewares
app.use(morgan("dev")); //logs all the incoming req information
//app.use(helmet()) // setting default security headers to protect some attacks
app.use(cors()); //allow cross origin resources
app.use(express.json()); //convert income data in the req.body

const __dirname = path.resolve(); //// absolute path

app.use(express.static(path.join(__dirname, "client/build"))); ////client path or static path

//MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//ROUTERS
import transRouter from "./src/routers/transRouter.js";
import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", transRouter);

app.get("/", (req, res) => {
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.use("*", (req, res, next) => {
  const error = {
    message: "404 page not found",
    code: 200,
  };

  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  console.log(error);
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("ypu server is ready at http://localhost:${PORT}");
});
