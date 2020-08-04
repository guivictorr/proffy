import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
  
})

app.listen(4444)