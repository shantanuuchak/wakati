import configureOpenAPI from '@/lib/configure-openapi'
import createApp from '@/lib/create-app'

const app = createApp()
configureOpenAPI(app)

app.get('/hey', (c) => c.text('Route is working!'))

export default app
