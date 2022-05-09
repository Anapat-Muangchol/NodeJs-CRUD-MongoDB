const controllers = require('./controllers')

const usersRoutes = (app) => {
    // app.get('/users', async (req, res) => {
    //     res.send('GET USERS')
    // })

    app.get('/users', controllers.users.getUsers)
    app.get('/users/:userId', controllers.users.getUserById)
    app.post('/users', controllers.users.postUser)
    app.patch('/users', controllers.users.patchUser)
    app.delete('/users', controllers.users.deleteUser)
}

module.exports = {
    usersRoutes
}