const mongoose = require('mongoose')
const buildApp = require('./src/app')
const config = require('./src/config')

const startApp = async () => {
    const appOptions = {
        logger: true
    }
    const app = await buildApp(appOptions)

    try {
        await app.listen(config.port, config.hostname)
        console.log(`app is listening on port ${config.port}`)

        await mongoose.connect(config.mongodb.uri
            // , {
            //     useNewUrlParser: true,
            //     useCreateIndex: true,
            //     useUnifiedTopology: true
            // }
        )
        console.log('mongo has been connected')

    } catch (error) {
        throw error
    }
}

startApp()