import Router from 'koa-router';
import songsCtrl from './songs.ctrl';

const songs = new Router();

songs.get('/', songsCtrl.list);

export default songs;
