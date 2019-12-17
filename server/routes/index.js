module.exports = (app) => {
  app.use('/tags', require('./tags'))
  app.use('/users', require('./users'))
  app.use('/articles', require('./articles'))
  app.use('/archives', require('./archives'))
  app.use('/comments', require('./comments'))
  app.use('/uploads', require('./uploads'))

  // Add headers
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
  })

  app.use((req, res) => {
    var timestamp = Date.now()
    var now = new Date(timestamp)
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    var timeStr = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second

    console.log(timeStr + ' 未知请求' + req.originalUrl + ' 重定向到首页')
    res.redirect('/')
  })

  // 错误处理
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('未知错误!')
  })
}
