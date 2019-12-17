/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const express = require('express')
var Article = require('../models/Article')
var router = express.Router()

// 获取所有标签
router.get('/', (req, res) => {
  Article.getTags((tagSet) => {
    let tags = []
    for (let [k, v] of tagSet.entries()) {
      tags.push({ key: k, value: v })
    }
    res.json(tags)
  })
})

module.exports = router
