/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable standard/no-callback-literal */
var mongoose = require('mongoose')

// 创建schema
var articleSchema = new mongoose.Schema({
  articleId: String, // 文章唯一ID(这里直接使用时间)
  title: String, // 标题
  tags: [String], // 标签
  content: String, // 内容
  summary: String, // 摘要
  time: Date, // 时间
  classification: String, // 分类
  views: Number, // 浏览数
  likes: Number, // 喜欢数
  isTop: Number, // 置顶 100-表示永久置顶(翻页也置顶) 50-表示本页置顶(翻页无效) 0-表示不置顶
  active: { // 是否展示
    type: Boolean,
    default: true
  }
})

// 定义静态方法
// 根据文章id查找
articleSchema.statics.getArticleByAid = function (aid, callback) {
  this.findOne({ articleId: aid }, (_err, result) => {
    if (_err) {
      console.log('Article searchById 查询数据库出错 ' + _err)
      throw _err
    }
    callback(result)
  })
}

// 获取所有文章
articleSchema.statics.getAll = function (callback) {
  this.find({}, (_err, res) => {
    if (_err) {
      throw _err
    }
    callback({
      results: res
    })
  })
}

// 获取最新文章
articleSchema.statics.getLatest = function (limit, callback) {
  var self = this
  // estimatedDocumentCount(添加条件查询数量无效)
  this.count({ active: true }, function (_err, count) {
    self.find({ active: true }, (_err, res) => {
      if (_err) {
        throw _err
      }
      callback({
        total: count,
        results: res
      })
    }).limit(limit).sort({ '_id': -1 })
  })
}

// 获取后面的文章
articleSchema.statics.getNextPageWithLastId = function (lastId, limits, callback) {
  var self = this
  // estimatedDocumentCount(添加条件查询数量无效)
  this.count({ active: true }, function (_err, count) {
    self.find({ _id: { $lt: lastId }, active: true }, (_err, res) => {
      if (_err) {
        throw _err
      }
      callback({
        total: count,
        results: res
      })
    }).limit(limits).sort({ '_id': -1 })
  })
}

// 根据文章id删除
articleSchema.statics.deleteByAid = function (aid, callback) {
  this.deleteOne({ articleId: aid }, (_err) => {
    if (_err) {
      callback({
        success: true,
        message: _err
      })
    } else {
      callback({
        success: true
      })
    }
  })
}

// 获取所有标签
articleSchema.statics.getTags = function (callback) {
  this.find({ active: true }, (_err, results) => {
    if (_err) {
      throw _err
    }
    let tagSet = new Set()
    for (var i = 0; i < results.length; i++) {
      for (var j = 0; j < results[i].tags.length; j++) {
        if (!tagSet.has(results[i].tags[j])) {
          tagSet.add(results[i].tags[j])
        }
      }
    }
    callback(tagSet)
  })
}

// 创建一个类,mongoose的model
var Article = mongoose.model('Article', articleSchema)

exports = module.exports = Article
