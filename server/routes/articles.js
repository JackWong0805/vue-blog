/* eslint-disable prefer-const */
const express = require('express')
const url = require('url')

var Article = require('../models/Article')

var router = express.Router()

// 验证token
var ensureAuthorized = require('../middlewares/check').ensureAuthorized

// 获取所有文章 根据参数判断是获取第一页还是下一页
router.get('/', (req, res) => {
  var params = url.parse(req.url, true).query
  if (params.id) {
    Article.getNextPageWithLastId(params.id, parseInt(params.limit), (data) => {
      res.send(data)
    })
  } else if (params.limit) {
    Article.getLatest(parseInt(params.limit), (data) => {
      res.send(data)
    })
  } else {
    Article.getAll((data) => {
      res.send(data)
    })
  }
})

// 新增文章 添加验证
router.post('/', ensureAuthorized, (req, res) => {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  var articleId = year + '' + month + '' + day + '' + hour + '' + minute + '' + second
  Article.getArticleByAid(articleId, result => {
    if (result === null) {
      var article = req.body
      var newArticle = new Article({
        articleId: articleId, // 文章唯一ID(这里直接使用时间)
        title: article.title, // 标题
        tags: article.tags, // 标签
        content: article.content, // 内容
        summary: article.summary, // 摘要
        time: Date.now(), // 时间
        classification: article.classification, // 分类
        views: 0, // 浏览数
        likes: 0, // 喜欢数
        isTop: false, // 置顶
        active: true // 对外可见
      })
      newArticle.save(_err => {
        if (_err) {
          res.json({
            success: false,
            message: '保存失败'
          })
        } else {
          res.json({
            success: true,
            message: '保存成功'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: '该文章已经存在, 请勿重复提交!'
      })
    }
  })
})

// 获取某篇文章
router.get('/:articleId', (req, res) => {
  Article.getArticleByAid(req.params.articleId, (article) => {
    res.send({
      result: article
    })
  })
})

// 修改某一篇文章
router.put('/:articleId', ensureAuthorized, (req, res) => {
  let attributes = req.body
  Article.getArticleByAid(req.params.articleId, result => {
    if (result !== null) {
      for (var prop in attributes) {
        result[prop] = attributes[prop]
      }
      result.save(_err => {
        if (_err) {
          res.json({
            success: false,
            message: result.title + ' 设置失败 ' + _err
          })
        } else {
          res.json({
            success: true,
            attributes
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: '文章不存在！'
      })
    }
  })
})

// 删除某一篇文章
router.delete('/:articleId', ensureAuthorized, (req, res) => {
  Article.deleteByAid(req.params.articleId, (result) => {
    res.send(result)
  })
})

module.exports = router
