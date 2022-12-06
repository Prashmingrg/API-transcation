import express from "express";
import {
  getAllUserTransaction,
  insertTrans,
} from "../models/trasactioin/TransactionModel.js";

const router = express();

export default router;

//
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const trans = await getAllUserTransaction({ userId: authorization });
    res.json({
      status: "success",
      message: "get message succes",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

//POST METHODS

router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await insertTrans({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Transection added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add, please try again later.",
        });
  } catch (error) {
    next(error);
  }
});

//DELETE
router.delete("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "delete message succes",
    });
  } catch (error) {
    next(error);
  }
});
