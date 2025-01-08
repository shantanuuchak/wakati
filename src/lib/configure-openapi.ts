import type { OpenAPIHono } from "@hono/zod-openapi"
import packageJson from '../../package.json'

export default function configureOpenAPI(app: OpenAPIHono) {
    app.doc('/doc', {
        openapi: '3.0.0',
        info: {
            title: 'Wakati',
            description: 'Text Intelligence',
            version: packageJson.version,
        }
    })
}