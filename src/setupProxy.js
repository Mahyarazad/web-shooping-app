const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(proxy('/authenticate', {target: 'https://cors-anywhere.herokuapp.com/authenticate'}))
}