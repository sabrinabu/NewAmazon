import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import user from '../models/userModel.js';

const userRouter=express.Router();
userRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
  const createdUsers= await user.insertMany(data.users);
  res.send({createdUsers});
}));
export default userRouter;