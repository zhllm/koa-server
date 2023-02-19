import { configure, getLogger } from 'log4js';
import config from '../config';

configure(config.log);

export const accessLog = getLogger('access');

export const dbLog = getLogger('db');


export default getLogger();