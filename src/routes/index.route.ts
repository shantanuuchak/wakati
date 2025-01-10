import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { createRouter } from "@/lib/create-app";

const router = createRouter()
    .openapi(createRoute({
        tags: ["Index"],
        method: "get",
        path: "/",
        responses: {
            [HttpStatusCodes.OK]: {
                content: {
                    'application/json': {
                        schema: z.object({})
                    }
                },
                description: "Wakati API Index"
            }
        }
    }
    ), (c) => {
        return c.json({
            message: "Hello Wakati 👋"
        }, HttpStatusCodes.OK)
    })

export default router