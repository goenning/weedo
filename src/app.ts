import * as express from 'express';
import { getSiteSettings } from './services/getSiteSettings';

export const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/public', express.static('public'));

app.use(async (req, res, next) => {
  const host = `${req.protocol}://${req.get('host')}`;
  res.locals.site = await getSiteSettings(host);
  if (!res.locals.site) {
    return res.status(404).send();
  }
  next();
});

app.get('/', (req, res, next) => {
  res.render('index', { });
});
