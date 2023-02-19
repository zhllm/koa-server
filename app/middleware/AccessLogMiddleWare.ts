import { Context, Next } from "koa";
import { accessLog } from '../logger';

function AccessLogMiddleWare(ctx: Context, next: Next) {
    const logStr = `path${ctx.path} | method: ${ctx.method} us: ${ctx.headers['user-agent']}`;
    accessLog.info(logStr)
    return next();
}

export default AccessLogMiddleWare;