const productRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const infoRouter = require('./infoRouter')

function routerApi(app) {
  app.use('/', infoRouter)
  app.use('/products', productRouter)
  app.use('/users', usersRouter)
}

module.exports = routerApi
