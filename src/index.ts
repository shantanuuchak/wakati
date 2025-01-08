import createApp from '@/lib/create-app'
import configureOpenAPI from '@/lib/configure-openapi'
import index from '@/routes/index.route'
import analyse from '@/routes/analyse.index'

const app = createApp()
configureOpenAPI(app)

// for every route
const routes = [
    index, analyse
];

routes.forEach((route) => app.route("/", route)) 


app.get('/hey', (c) => c.text('Route is working!'))

export default app
