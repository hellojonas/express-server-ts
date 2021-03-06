import express, { Handler } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.status(200).send('<h1>Express Server Running Fine</h1>');
  next();
});

export default app;
