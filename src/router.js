const { root, text, html } = require('./controller');
const {log, checkSize} = require("./middlewares");

const router = (app) => {
    
    app.get('/', log, root)
    
    app.get('/text', log, text)
    app.get('/text/:param', log, checkSize, text)
    
    app.get('/html', log, html)
    app.get('/html/:param', log, checkSize, html)
} 

module.exports = {router};