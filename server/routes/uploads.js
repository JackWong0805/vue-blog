const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/images')
  },
  filename: function (req, file, cb) {
    // file.mimetype
    // file.originalname
    // file.size
    // file.path
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({ storage: storage })

var ensureAuthorized = require('../middlewares/check').ensureAuthorized
var router = express.Router()

router.post('/', ensureAuthorized, upload.single('image'), (req, res) => {
  // eslint-disable-next-line prefer-const
  let file = req.file

  // console.log('文件类型：%s', file.mimetype)
  // console.log('原始文件名：%s', file.originalname)
  // console.log('文件大小：%s', file.size)
  // console.log('文件保存路径：%s', file.path)

  res.json({ url: '/uploads/images/' + file.filename })
})

module.exports = router
