import Router from "koa-router";
import AdminController from "../controller/AdminController";
import IndexController from "../controller/IndexController";
import LoginController from "../controller/LoginController";
import AuthMiddleAare from "../middleware/AuthMiddleWare";

const router = new Router({ prefix: '/admin' });


router.get('/', IndexController.index);
// router.use(AuthMiddleAare);
router.get('/login', LoginController.index);
router.get('/list', AuthMiddleAare, AdminController.getAdminList);

export default router; 
