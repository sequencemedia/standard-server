require('@babel/register')

module.exports.components = require('./components/index.jsx')
module.exports.router = require('./router/index.jsx')
module.exports.routes = require('./routes/index.jsx')

/*
module.exports = {
  components: require('./components/index.jsx'),
  router: require('./router/index.jsx'),
  routes: require('./routes/index.jsx')
}
*/
