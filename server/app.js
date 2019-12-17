const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const config = require('config-lite')(__dirname)
const winston = require('winston')
const expressWinston = require('express-winston')

require('./lib/mongo')

const app = express()
app.use(bodyParser.json())

// 设置静态文件目录
app.use(express.static('./public'))
// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}))
// 路由
routes(app)
// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}))

process.on('uncaughtException', (_err) => {
  console.log(_err)
})

app.listen(config.port, () => {
  console.log(config.port + '端口监听开启!')
})
