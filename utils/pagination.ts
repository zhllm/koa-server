import { Model } from "sequelize-typescript";


function pagination<T extends Model[]>(data: T, currentPage: number, total: number = 0, limit: number = 0) {

    return {
        data,
        currentPage,
        limit,
        total,
        totalPage: Math.ceil(total / limit),
    }

}

export default pagination;