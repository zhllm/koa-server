import { Context } from "koa";
import logger from '../logger';
import AdminService from "../service/AdminService";
import { sign } from '../../utils/auth';
import respinse from '../../utils/response';


class LoginController {
    async index(ctx: Context) {
        const admin = await AdminService.getAdmin();
        console.log('admin', admin);
        const token = sign(admin);
        respinse.success(ctx, { token });
        
    }
}


export default new LoginController();