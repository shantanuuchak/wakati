import { OpenAPIHono } from '@hono/zod-openapi'
import { logger } from '@/middlewares/pino-logger'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'

export default function createApp() {
    const app = new OpenAPIHono({
        strict: false
    })

    app.use(serveEmojiFavicon('🔥'))
    app.use(logger())

    app.notFound(notFound)
    app.onError(onError)
    return app;
}