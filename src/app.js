const fastify = require('fastify')
const routes = require('./routes')

const buildApp = async (options = {}) => {
    const app = fastify(options)

    routes.usersRoutes(app)
    
    return app
}

module.exports = buildApp