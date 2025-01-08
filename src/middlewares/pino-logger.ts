import {pinoLogger} from "hono-pino";

export function logger() {
    return pinoLogger();
}