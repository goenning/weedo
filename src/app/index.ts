import * as express from 'express';

export const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});