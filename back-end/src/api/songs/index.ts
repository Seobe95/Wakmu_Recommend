import Router from 'koa-router';
import songsCtrl from './songs.ctrl';


const songs = new Router();

songs.get('/', songsCtrl.list);
songs.post('/', songsCtrl.recommend);

export default songs;
