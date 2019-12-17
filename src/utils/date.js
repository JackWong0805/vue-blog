var dateutil = {
  dateStringToShow: function (time) {
    var timestamp = Date.parse(time)
    var postDate = new Date(timestamp)

    // 这里只能使用getFullYear, 使用getYear返回的是“当前时间-1900”
    var year = postDate.getFullYear()
    var month = postDate.getMonth() + 1
    var date = postDate.getDate()
    var hour = postDate.getHours()
    var minute = postDate.getMinutes()
    var second = postDate.getSeconds()

    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  }
}
export default dateutil
