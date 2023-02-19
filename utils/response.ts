import { Context } from "koa";

function success(ctx: Context, data: any = [], msg: string = 'success', code: number = 0) {
    ctx.body = {
        code,
        msg,
        data
    }
}


function error(ctx: Context, msg: string = '', data: any, code: number = 1) {
    ctx.body = {
        msg,
        ...data,
        code,
    }
}


export default {
    success,
    error,
}