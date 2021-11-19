import express from 'express';
import  Mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/newamazon',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
   //useCreateIndex: true,
})

app.use('/api/users',userRouter);
app.use('/api/products', productRouter);

app.get('/',(req,res)=>{
 res.send('server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});