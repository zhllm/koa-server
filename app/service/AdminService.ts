import Admin from "../model/Admin";


class AdminService {
    getAdmin() {
        return Admin.findOne().then(res => res?.dataValues);
    }

    getAdminByListPage(page: number = 1, limit: number = 15) {
        return Admin.findAndCountAll({
            limit,
            offset: (page - 1) * limit, 
        })
    }
}

export default new AdminService();