import TransactionSchema from "./TransactionSchema.js";

//CRUD

//INSERT
export const insertTrans = (obj) => {
  return TransactionSchema(obj).save();
};

//READ ALL THE TRANSACTION

export const getAllUserTransaction = (filter) => {
  return TransactionSchema.find(filter);
};

//DELETE
