// 导入包
const express = require('express');
const path = require('path');
// 导入index.js文件
const data = require('./data')
// 设置包
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
// 处理请求响应
// 获取所有数据
app.get('/api/getAll', (req, res) => {
  // console.log(data.get());
  if (!data.get()) {
    return res.status(500).send({
      code: 500,
      msg: '服务器端错误',
      data: null
    })
  }
  return res.status(200).send({
    coed: 200,
    msg: '数据请求成功',
    data: data.get()
  })
})
// 通过id 获取某一条数据
app.get('/api/getDetail', (req, res) => {
  // console.log(req.query.id)
  if (!req.query.id) {
    res.status(404).send({
      code: 404,
      msg: "没有找到您所需要的数据",
      data: null
    })
  }

  let dataInfo = data.getById(req.query.id)
  res.status(200).send({
    code: 200,
    msg: "数据查找成功",
    data: dataInfo
  })
  // console.log(dataInfo);
})

// 指定端口并启动服务
app.listen(3000, () => {
  console.log('服务器已启动 请打开http://www.localhost:3000');
})