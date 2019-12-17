var mongoose = require('mongoose')

// 创建schema
var userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true }, // 用户名
  password: { type: String, required: true }, // 用户密码
  avatar: { type: String }, // 头像
  email: { type: String }, // 邮箱
  phone: { type: String }, // 电话号码
  token: { type: String }
})

// 定义静态方法

// 创建一个类,mongoose的model
var User = mongoose.model('User', userSchema)

exports = module.exports = User
