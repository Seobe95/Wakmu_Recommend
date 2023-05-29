import Router from 'koa-router';
import songs from './songs';
import features from './features';

const api = new Router();

api.use('/songs', songs.routes());
api.use('/features', features.routes());

export default api;
