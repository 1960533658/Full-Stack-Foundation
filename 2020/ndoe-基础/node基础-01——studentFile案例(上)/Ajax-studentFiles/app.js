// 1.初始化项目 npm init -y
// 2.下载需要的包 npm install(i) express
// 3.实现最简单的服务器
// 导入包
const express = require('express');
const path = require('path');
// 使用express()方法来创建服务器
const app = express();

// 设置静态目录
// 导入path用以设置静态目录,输入惠特米勒响应的文件夹名  默认访问index.html
app.use(express.static(path.join(__dirname, 'public')));

// 接受浏览器请求并响应
app.post('/addInfo', (req, res) => {
  
})
// 4.指定端口并启动服务
app.listen(3000, () => {
  // http://127.0.0.1:3000
  console.log("服务器已启动 请打开http://localhost:3000");
})