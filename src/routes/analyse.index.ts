import { createRoute, z } from "@hono/zod-openapi";
import { createRouter } from "@/lib/create-app";

const QuerySchema = z.object({
    sentence: z
        .string()
        .min(5)
        .max(100)
})

const router = createRouter().openapi(createRoute({
    method: "get",
    path: "/analyse",
    request: {
        query: QuerySchema,
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: z.object({
                        message: z.string()
                    })
                }
            },
            description: "Wakati Index"
        }
    }
}
), (c) => {
    return c.json({
        message: "Hello There!"
    })
})

export default router