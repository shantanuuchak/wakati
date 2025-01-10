import { OpenAPIHono } from '@hono/zod-openapi'
import { logger } from '@/middlewares/pino-logger'
import { notFound, onError } from 'stoker/middlewares'
import { cors } from 'hono/cors'

export function createRouter() {
    return new OpenAPIHono({
        strict: false
    })
}

export default function createApp() {
    const app = createRouter()

    app.use(cors())
    // app.use(logger())

    app.notFound(notFound)
    app.onError(onError)
    return app;
}