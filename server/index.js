import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import processRouter from './routes/processRouter.js'

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors);
app.use(express.json());
app.use('/carpolicy', processRouter);

app.listen(PORT, () => console.log("Server started on PORT: " + PORT));
