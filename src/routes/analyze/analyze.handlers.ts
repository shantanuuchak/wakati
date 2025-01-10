import * as HttpStatusCodes from "stoker/http-status-codes";
import { AnalyzeRequest } from "./analyze.routes";
import { Context } from "hono";
import { RouteHandler } from "@hono/zod-openapi";

export const analyze: RouteHandler<AnalyzeRequest> = async (c: Context) => {
    const body = await c.req.json();

    if (!body.text) {
        return c.json({
            message: "No body provided"
        }, HttpStatusCodes.BAD_REQUEST)
    }

    return c.json({
        message: body
    }, HttpStatusCodes.OK)
}