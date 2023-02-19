import { Context } from "koa";
import AdminService from "../service/AdminService";
import pagination from '../../utils/pagination';
import response from "../../utils/response";

class AdminController {
    async getAdminList(ctx: Context) {
        const search = new URLSearchParams(ctx.querystring);
        console.log(search.get('page'), search.get('imit'));
        let _page: any = search.get('page');
        let _limit: any = search.get('imit');
        let page = 1, limit = 15;
        if (_page = Number(_page)) {
            page = _page;
        } else if (_limit = Number(_limit)) {
            limit = _limit
        }
        const { rows, count } = await AdminService.getAdminByListPage(page, limit);

        ctx.body = pagination(rows, page, count, limit);
        response.success(ctx, pagination(rows, page, count, limit));
    }
}

export default new AdminController();