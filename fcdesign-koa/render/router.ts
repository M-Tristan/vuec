import Router from 'koa-router';
import CommonController from './controllers/common';

export const router = new Router();

const commonController = new CommonController();


// 健康检测
router.get('/test', commonController.render as any);




// router.get(routes, commonController.render as any);
