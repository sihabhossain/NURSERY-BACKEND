import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/NotFound';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

//global error handler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('WELCOME TO NURSERY SERVER');
});

// not found handler
app.use(notFound);

export default app;
