const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')

const isDev = process.env.NODE_ENV === 'development'

const app = express()

app.use(favicon(path.join(__dirname, '../favicon.ico')))

if (!isDev) {
    const serverEntry = require('../dist/server-entry').default
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
    app.use('/public', express.static(path.join(__dirname, '../dist')))
    app.get('*', function(req, res) {
        const appString = ReactSSR.renderToString(serverEntry)
        const html = template.replace('<!-- app -->', appString)
        res.send(html)
    })
} else {
    const devStatic = require('./utils/dev-static.js')
    devStatic(app)
}



app.listen(3333, function() {
    console.log('server is listening on port 3333')
})