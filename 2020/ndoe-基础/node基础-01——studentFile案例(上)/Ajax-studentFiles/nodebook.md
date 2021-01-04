# 项目分析

## 一、实现一个最简单的服务器

### 1.初始化项目 npm init -y
### 2.下载需要的包 npm install(i) express
### 3.导入包
```js
const express = require('express');
// 设置包
const app = express();
```
### 4.启动服务
```js
app.listen(3000,()=> {
  // http://127.0.0.1
  console.log('服务已启动 请输入或点击 http://localhost:3000');
})
```

## 二、设置网站的静态目录资源


### 1.把前端html、css、js、image等文件复制到public文件夹中,其中还会有jQuery、animate(模板字符串)

### 2.在app.js中设置静态资源
```js
// 1.初始化项目 npm init -y
// 2.下载需要的包 npm install(i) express
// 3.实现最简单的服务器
// 导入包
const express = require('express');
const path = require('path');
// 使用express()方法来创建服务器
const app = express(express.static(path.join(__dirname,"public")));

// 设置静态目录
// 导入path用以设置静态目录,输入惠特米勒响应的文件夹名  默认访问index.html
app.use()
```

## 三、点击提交按钮把学生信息添加到服务器

### 1.前端Ajax请求
①:添加按钮添加点击事件
②:手机from表单填入的信息
③:使用ajax技术把信息发送到服务器
```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title>学生档案</title>
	<link rel="stylesheet" href="./css/main.css">
</head>

<body>
	<form id="form">
		<fieldset>
			<legend>学生档案</legend>
			<label>
				姓名: <input class="normal" name="username" type="text" autofocus placeholder="请输入姓名">
			</label>
			<label>
				年龄: <input class="normal" name="age" type="text" placeholder="请输入年龄">
			</label>
			<label>
				性别:
				<!-- 单选框中的name属性值一定要一样 -->
				<input type="radio" name="gander" value="0"> 男
				<input type="radio" name="gender" value="1"> 女
			</label>
			<label>
				邮箱地址: <input class="normal" name="email" type="email" placeholder="请输入邮箱地址">
			</label>
			<label>
				爱好:
				<input type="checkbox" name="hobbies" value="敲代码"> 敲代码
				<input type="checkbox" name="hobbies" value="打篮球"> 打篮球
				<input type="checkbox" name="hobbies" value="睡觉"> 睡觉
			</label>
			<label>
				所属学院:
				<select class="normal" name="school">
					<option value="前端与移动开发">前端与移动开发</option>
					<option value="PHP">PHP</option>
					<option value="JAVA">JAVA</option>
					<option value="Android">Android</option>
					<option value="IOS">IOS</option>
					<option value="UI设计">UI设计</option>
					<option value="C++">C++</option>
				</select>
			</label>
			<label>
				入学日期: <input type="date" name="enterdata" class="normal">
			</label>
			<label class="btn">
				<input type="button" value="提交" class="normal">
			</label>
		</fieldset>
	</form>
	<!-- 引入jQuery -->
	<script src="./lib/jquery/jquery-3.4.1.min.js"></script>
	<!-- 具体的业务代码 -->
	<script>
		// 添加点击事件
		(function () {
			$(".btn input").on('click', function (e) {
				// 阻止浏览器的默认行为
				let formData = $('form').serialize()
				console.log(formData);
				// 使用Ajax技术把页面填写的信息发送到服务器
				$.ajax({
					// 请求方式 POST增加（前端发送数据给服务器
					type: 'POST',
					// 请求地址
					url: "/addInfo",
					// 请求数据
					data: "formData",
					// 成功时的回调函数
					success: function (data) {
						console.log(data);
					}
				})
			})
		})()
	</script>
</body>

</html>
```
### 2.后端数据处理

## 四、如果学术信息添加成功,跳转到学生信息列表