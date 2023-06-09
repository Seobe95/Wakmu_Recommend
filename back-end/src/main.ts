import Koa from 'koa';
import Router from 'koa-router';
import api from './api';
import bodyParser from 'koa-bodyparser';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from '@koa/cors';

const { PORT, MONGO_URI, LOCAL_CLIENT_URL, DEPLOY_CLIENT_URL } = process.env;
const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI!)
  .then(() => {
    console.log('connected to mongo DB');
  })
  .catch((e: Error) => {
    console.error(e);
  });

router.use('/api', api.routes());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
  console.log('listen to port %d', port);
});
