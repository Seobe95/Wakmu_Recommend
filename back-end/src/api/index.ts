import Router from 'koa-router';
import songs from './songs';

const api = new Router();

api.use('/songs', songs.routes());

export default api;
