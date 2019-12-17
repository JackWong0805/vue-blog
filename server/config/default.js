module.exports = {
  port: 3000,
  jwt: {
    maxAge: 86400 // 授权时效24小时
  },
  // 若数据库有权限设置
  // mongodb: 'mongodb://mongodb数据库用户名:mongodb数据库密码@localhost:27017/blog'
  mongodb: 'mongodb://localhost:27017/blog'
}
