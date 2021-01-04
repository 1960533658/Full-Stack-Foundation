$(document).ready(function () {
  // 发起Ajax请求
  $.ajax({
    // 球球方法
    type: "GET",
    // 请求地址
    url: "/api/getAll",
    // 请求数据
    data: null,
    // 请求成功后的回调函数
    success: function (result) {
      console.log(result)
      let htmlStr = template('list_templ', {
        list: result.data
      })
      $('#members').html(htmlStr)
    }
  })
})