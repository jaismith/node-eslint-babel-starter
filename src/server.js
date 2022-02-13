import express from 'express';

const app = express();

app.get('/', () => ({ message: 'Hello World!' }));

const port = process.env.PORT || 9090;
app.listen(port);
