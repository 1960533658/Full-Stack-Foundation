// index.js 的作用就是用来处理merbers.json或者backup.json文件
// 增加 删除 修改 查询 倒要用index.js中的方法来做
// console.log('你好');

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
  },
  getById: (id) => {
    // console.log(id);    
    let info = database.find(ele => ele.id = id)
    return info;
  }
}