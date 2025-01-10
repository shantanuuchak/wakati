import * as HttpStatusCodes from "stoker/http-status-codes";
import { AnalyzeRequest } from "./analyze.routes";
import { Context } from "hono";
import { RouteHandler } from "@hono/zod-openapi";
import estimate from "@/helpers/estimate";

export const analyze: RouteHandler<AnalyzeRequest> = async (c: Context) => {
    const body = await c.req.json();

    if (!body.text) {
        return c.json({
            message: "No body provided"
        }, HttpStatusCodes.BAD_REQUEST)
    }

    const data = await estimate(body.text)

    return c.json({
        message: data
    }, HttpStatusCodes.OK)
}