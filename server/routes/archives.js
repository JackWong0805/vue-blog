const express = require('express')
var router = express.Router()

var Article = require('../models/Article')

// 获取归档
router.get('/', (req, res) => {
  Article.find({ active: true }, function (_err, results) {
    if (_err) {
      throw _err
    }

    var archives = []

    for (var i = 0; i < results.length; i++) {
      var timestamp = Date.parse(results[i].time)
      var postDate = new Date(timestamp)
      var year = postDate.getFullYear()
      var month = postDate.getMonth() + 1
      var day = postDate.getDate()

      var article = {
        articleId: results[i].articleId,
        title: results[i].title,
        date: month + '-' + day,
        classification: results[i].classification,
        timestamp: timestamp
      }

      if (archives.length <= 0) {
        // eslint-disable-next-line prefer-const
        let yearCategories = {
          year: year,
          articles: []
        }
        yearCategories.articles.push(article)
        archives.push(yearCategories)
      } else {
        let containThisYear = false
        for (var j = 0; j < archives.length; j++) {
          if (archives[j].year === year) {
            containThisYear = true
            archives[j].articles.push(article)
            break
          }
        }

        if (!containThisYear) {
          // eslint-disable-next-line prefer-const
          let yearCategories = {
            year: year,
            articles: []
          }
          yearCategories.articles.push(article)
          archives.push(yearCategories)
        }
      }
    }

    // 每年的文章按日期排序(最新的在前)
    for (var k = 0; k < archives.length; k++) {
      archives[k].articles.sort((a, b) => {
        return b.timestamp - a.timestamp
      })
    }

    // 年份排序(最新的在前)
    archives.sort((a, b) => {
      return b.year - a.year
    })

    res.send({ result: archives })
  })
  // 格式如下
  // {
  //   result: [
  //     {
  //       year: '2019',
  //       articles: [
  //         {
  //           title: 'xxxx',
  //           date: '11-05',
  //           classification: 'life'
  //           timestamp: 1574644246519
  //         },
  //         {
  //           title: 'xxxx',
  //           date: '11-05',
  //           classification: 'life'
  //           timestamp: 1574644246519
  //         },
  //       ]
  //     },
  //     {
  //       year: '2018',
  //       articles: [
  //         {
  //           title: 'xxxx',
  //           date: '11-05',
  //           classification: 'life'
  //           timestamp: 1574644246519
  //         },
  //         {
  //           title: 'xxxx',
  //           date: '11-05',
  //           classification: 'life'
  //           timestamp: 1574644246519
  //         },
  //       ]
  //     }
  //   ]
  // }
})

module.exports = router
