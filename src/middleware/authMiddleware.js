import { findAUser } from "../models/user/UserModel.js";

export const isAuth = async (req, res, next) => {
  //if valid user then return true other false.
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    //if the authorization is valid go to next middlewear
    const user = await findAUser({ _id: authorization });
    console.log(user);
    json?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unathorized",
        });
    console.log("transaction router");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
