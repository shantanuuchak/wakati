import { OpenAPIHono } from '@hono/zod-openapi'
import { logger } from '@/middlewares/pino-logger'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'

export function createRouter() {
    return new OpenAPIHono({
        strict: false
    })
}

export default function createApp() {
    const app = createRouter()

    app.use(serveEmojiFavicon('🔥'))
    app.use(logger())

    app.notFound(notFound)
    app.onError(onError)
    return app;
}