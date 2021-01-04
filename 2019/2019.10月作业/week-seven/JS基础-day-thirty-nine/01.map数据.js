
// set集合和array数组
//es5中Array数组有缺点，因此ex6中出现了set
//Map字典和Object对象
//ex5中对象有缺点，因此在es6中出现了，map
//object中的键的数据类型有那些：
//1，’1‘，true。undefined，null


//为了解决只能有字符串作为属性名的现象，set定义的对象可以是number、Boolean等其他数据类型


//map语法：
//1、初始化一个空的map
// let map = new Map();

// //2、字面量创建map
// let map = new Map([
//     [键, 值],
//     [键, 值],
//     [键, 值],
//     [键, 值],
// ])

//实例：
let map = new Map([
    ['name', '张三'],
    ['age', '18'],
    [true, 'boolean'],
    ['name', '张三0'],
]);
console.log(map);
//打印结果：
// Map(3)
// [[Entries]]
// 0: { "name" => "张三" }
// key: "name"
// value: "张三"
// 1: { "age" => "18" }
// 2: { true => "boolean" }
// key: true
// value: "boolean
//与obj稍有不同，map格式就是一个二维数组

//操作方式
//返回map的长度
// console.log(map.size)
// console.log(map)
//添加键值对
map.set('height', 100);
//覆盖键值对
map.set('name', 'jerry');

//
//字典名.has('name')判断键是否存在于map中在返回true，不在返回false
//语法：字典名.has（key）
// console.log(map.has('name'))


//打印所有的键值对，格式：键=>值······

console.log(map.entries());


//通过某一个键，来获取他的值
//语法:字典名.get(key)
// console.log(map.get('name'))



console.log(map.keys());


console.log(map.values());



// map.delete(key)通过key删除对应的一条数据,删除成功返回true，失败（不存在key）返回false
// console.log(map.delete('aaa'))       //false

//删除所有的键值对没有返回值，无参数清除所有数据
// map.clear()
// console.log(map)


//遍历map
// for (let key of map.keys()) {
//     console.log(key)
// }
//遍历出来对象的所有键
// console.log(map.keys());

//循环遍历出来对象的所有键值对
// for (let key of map.entries()) {
//     console.log(key)
// }


//循环遍历出来对象的所有值
// for (let key of map.values()) {
//     console.log(key)
// }

//！！！！！！！！！！！！！遍历map字典的三种方法
//遍历键map.keys




var arr = [1, 2];
arr.forEach(function (item, index) {
    console.log(item, index);
});

function fn(a, b) { return a + b };

var fn = (a, b) => { a + b };










//foreach遍历map字典
// map.forEach(fucntion (值，键，map本身) {})
map.forEach(function (value, key) {
    console.log(key + '***' + value);
});
