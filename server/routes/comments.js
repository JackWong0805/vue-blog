const express = require('express')
const router = express.Router()
const ensureAuthorized = require('../middlewares/check').ensureAuthorized

// POST /comments 创建一条留言
router.post('/', ensureAuthorized, function (req, res, next) {
  res.send('创建留言')
})

// DELETE /comments/:commentId 删除一条留言
router.delete('/:commentId', ensureAuthorized, function (req, res, next) {
  res.send('删除留言')
})

module.exports = router
