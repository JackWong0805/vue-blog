const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const publicKey = fs.readFileSync(path.resolve(__dirname, '../config/public_key.pem'))

module.exports = {
  // 验证是否有token
  ensureAuthorized (req, res, next) {
    var token = req.headers.authorization // node.js 会把属性全变为小写
    if (token) {
      jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (_err, decoded) => {
        if (_err) {
          return res.status(403).json({
            success: false,
            message: _err.message
          })
        } else {
          next()
        }
      })
    } else {
      return res.status(403).send({
        success: false,
        message: '请求头部没有找到token'
      })
    }
  }
}
