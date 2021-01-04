$(document).ready(function () {
  // lication.search保存了--->?id=1 
  console.log(location.search);
  // URL查询对象
  let queryStr = new URLSearchParams(location.search)
  // get中的参数id是网址中的id,同理也可以获取到name
  let id = queryStr.get("id");
  // console.log(id);
  $.ajax({
    type: "get",
    url: "/api/getDetail",
    data: {
      id: id,
    },
    success: function (data) {
      // console.log(data);
      let htmlStr = template('detail_templ', data.data);
      $('.jumbotron').html(htmlStr)
    }
  })
})