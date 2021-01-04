$(function () {
  // 预览
  // 给图片上传控件添加change事件监听是否上传
  $('#input_avatar').on('change', function () {

    // 获取input中的文件对象 xxx.files[0]
    // 创建new URL.createObjectURL(input.files[0])
    let imgSrc = URL.createObjectURL($(this)[0].files[0])
    console.log(imgSrc);
    // 赋值
    $('#avatar').attr('src', imgSrc)
  })
  // ajax请求
  // 给#btn_add添加一个点击事件
  $('#btn_add').on('click', function () {
    let formdata = new FormData();
    // 发需要的数据收集好，放到formdata中去
    formdata.append('name', $('#input_name').val());
    formdata.append('bio', $('#input_bio').val());
    formdata.append('avatar', $('#input_avatar')[0].files[0]);

    // 发起Ajax请求
    $.ajax({
      type: "POST",
      url: "/api/add",
      data: formdata,
      processData: false,
      contentType: false,
      // 成功时的回调函数
      success: function (result) {
        console.log(result);
      },
      // 失败时的回调函数
      error: function () {
        alert('用户添加失败')
      }
    })
    // 解决按钮重复点击的问题 防止重复发起Ajax请求
    return false;
  })
})