import createApp from '@/lib/create-app'

const app = createApp()

app.get('/hey', (c) => c.text('Route is working!'))

export default app
