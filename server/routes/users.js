const express = require('express')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
// const config = require('config-lite')(path.resolve(__dirname, '../config'))
var router = express.Router()

const privateKey = fs.readFileSync(path.resolve(__dirname, '../config/pkcs8_private_key.pem'))
const publicKey = fs.readFileSync(path.resolve(__dirname, '../config/public_key.pem'))

var User = require('../models/User')

// 注册
router.post('/signup', (req, res) => {
  User.findOne({ name: req.body.name }, (_err, user) => {
    if (_err) {
      res.json({
        type: false,
        data: '查询数据库出错啦: ' + _err
      })
    } else {
      if (user) {
        res.json({
          success: false,
          message: '用户名已经存在!'
        })
      } else {
        var userModel = new User()
        userModel.name = req.body.name
        userModel.password = req.body.password
        userModel.save((_err, user) => {
          if (_err) {
            res.json({
              success: false,
              message: '保存用户失败: ' + _err
            })
          } else {
            res.json({
              success: true,
              message: user.name + ' 注册成功'
            })
          }
        })
      }
    }
  })
})

// 登录
router.post('/signin', (req, res) => {
  User.findOne({ name: req.body.name }, (_err, user) => {
    if (_err) {
      res.json({
        success: false,
        message: '数据库错误: ' + _err
      })
    } else {
      if (user) {
        if (req.body.password === user.password) {
          // 签发token
          user.token = jwt.sign({
            username: user.name
          }, privateKey, {
            algorithm: 'RS256',
            expiresIn: 86400// 授权时效24小时
          })
          res.json({
            success: true,
            message: user.name + ' 登录成功',
            token: user.token,
            pub: publicKey.toString()
          })
        } else {
          res.json({
            success: false,
            message: user.name + ' 密码不正确'
          })
        }
      } else {
        res.json({
          success: false,
          message: '用户不存在'
        })
      }
    }
  })
})

module.exports = router
