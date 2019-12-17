const config = require('config-lite')(__dirname)
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect(config.mongodb)
