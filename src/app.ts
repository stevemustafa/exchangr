import * as express from 'express'

class App {
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(){
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello, World!'
            })
        })

        router.get('/sanity', (req,res) => {
            res.sendStatus(200)
        })

        this.express.use('/', router)
        this.express.use('/sanity', router)

    }
}

export default new  App().express