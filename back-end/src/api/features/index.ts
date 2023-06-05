import Router from 'koa-router';
import featuresCtrl from './features.ctrl';

const features = new Router();

features.get('/', '');
features.post('/', featuresCtrl.list);

export default features;
