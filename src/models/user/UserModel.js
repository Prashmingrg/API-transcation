import UserSchema from "./UserSchema.js";

//create user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

//login user

export const findAUser = (obj) => {
  return UserSchema.findOne(obj);
};

// delete user
