import express from 'express';
import handler from './api/generate';

import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());
app.post('/api/generate', (req, res) => {
  handler(req, res).catch((error) => {
    console.error('Error handling request:', error); // Log the error
    res.status(500).send({ error: 'Internal Server Error' });
  });
});
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
