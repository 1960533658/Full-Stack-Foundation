/*
11.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
*/
// 调用函数
var arr = [18, 45, 0, 58, 32,59];

console.log('最大值是:' + getArrayMax(arr));


function getArrayMax(arr) {

    // 分析:
    // 创建一个变量来储存数组最大值
    var max = arr[0];

    // 遍历数组
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }

    // 返回最大值
    return max;
}