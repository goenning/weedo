import * as express from 'express';
import { getSiteSettings } from './services/getSiteSettings';

export const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(async (req, res, next) => {
  res.locals.settings = await getSiteSettings(req.headers['host']);
  next();
});

app.get('/', (req, res, next) => {
  res.render('index', { message: res.locals.settings.name });
});
