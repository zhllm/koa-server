import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import router from './router';
import { Server } from 'http';
import AccessLogMiddleWare from './middleware/AccessLogMiddleWare';
import db from './db';
const app = new Koa();

db()

app
    .use(AccessLogMiddleWare)
    .use(router.routes());


const run = (port: any): Server => {

    return app.listen(port);
}

export default run;