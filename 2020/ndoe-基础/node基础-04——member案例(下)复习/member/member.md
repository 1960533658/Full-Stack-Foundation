# member 练习

## 准备工作

### 初始化项目
npm> init -y
npm> install express

### 一个简单的服务器
```js
const express = require('express');
// 设置包
const app = express();
// 处理请求响应

// 指定端口并启动服务
app.listen(3000, () => {
  console.log('服务器已启动 请打开http://www.localhost:3000');
})
```
### 静态资源设置

```js
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

```

### 把静态资源放到项目中
1.index.html
2.detail.html
3.upload文件夹
4.lib文件夹
5.js文件夹
6.image文件夹
7.css文件夹

<!-- 分割线 -->
***
<!-- 分割线 -->
_ _ _



## 查

### 显示所有数据

#### 前端页面
```html
  <!-- bootstrap UI框架 -->
  <link rel="stylesheet" href="./lib/bootstrap/dist/css/bootstrap.min.css">
  <!-- 该页面CSS -->
  <link rel="stylesheet" href="./css/index.css">
  <!-- jQuery库 -->
  <script src="./lib/jquery/dist/jquery.min.js"></script>
  <!-- ArtTemplate库 -->
  <script src="./lib/ArtTemplate/template-web.js"></script>
```

#### 前端代码(Ajax请求)
```js
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
```

#### 后端代码
`请求处理 app.js`
```js
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
```

`数据处理 index.js`
```js
const fs = require('fs');
// 导入path包(获取文件)
const path = require('path');
// 导入backup.json
const database = require('./backup.json');
// 导出包
module.exports = {
  get: () => {
    return database;
  }
}
```
#### 数据库代码 (db.json)
```js
// 导入包
// 导入fs包(写入文件)
const fs = require('fs');
// 导入path包(获取文件)
const path = require('path');
// 导入backup.json
const database = require('./backup.json');
// 导出包
module.exports = {
  get: () => {
    return database;
  }
}
```

### 显示某一条数据的详情页
#### 1.index.html
<a href="/detail.html?id={{$value.id}}" class="card-link" data-id="{{$value.id}}">View</a>

#### 2.details.html中获取id
```js
let id = new URLSearchParams(location.search).get('id')
```
#### 3.id传给服务器
```js
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
      id:id,
    },
    success: function (data) {
      console.log(data);
    }
  })
})
```
#### 4.让data中查找对应id的数据给服务器
`index.js`
```js
const fs = require('fs');
// 导入path包(获取文件)
const path = require('path');
// 导入backup.json
const database = require('./backup.json');
// 导出包
module.exports = {
  get: () => {
    return database;
  },
// TODO
  getById: (id) => {
    // console.log(id);    
    let info = database.find(ele => ele.id = id)
    return info;
  }
}
// TODO
```

#### 5.让服务器查找到的数据返回给前端
`app.js`
```js
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
// TODO
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
// TODO

// 指定端口并启动服务
app.listen(3000, () => {
  console.log('服务器已启动 请打开http://www.localhost:3000');
})
```
#### 6.渲染页面
## 删

## 改

## 增