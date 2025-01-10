import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";

const tags = ["Analyze"]

export const analyze = createRoute({
    tags,
    method: "post",
    path: "/analyze",
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.object({})
                }
            },
        }
    },
    responses: {
        [HttpStatusCodes.OK]: {
            content: {
                'application/json': {
                    schema: z.object({})
                }
            },
            description: "Analyze your text data"
        },
        [HttpStatusCodes.BAD_REQUEST]: {
            content: {
                'application/json': {
                    schema: z.object({})
                }
            },
            description: "Bad request"
        }
    }
})

export type AnalyzeRequest = typeof analyze;