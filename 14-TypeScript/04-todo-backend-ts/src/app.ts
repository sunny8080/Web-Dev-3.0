import express, { NextFunction, Request, Response } from 'express';

const PORT: number = 4000;
const app = express();

app.use(express.json());

// Mount Routes
import TodoR from './routes/TodoR';

app.use('/todos', TodoR);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello from todo backend');
});

// Add Middlewares
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    error: err.message,
  });
});

// Listen App
app.listen(PORT, (err?: any) => {
  if (err) {
    console.log('Error occured during building server');
    process.exit();
  }
  console.log(`Server is running on ${PORT}`);
});
