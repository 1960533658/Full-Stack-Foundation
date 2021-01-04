/*
14.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
*/

var arr = ["h","e","l","l","o"];
//  调用方法 
console.log(reverseArray(arr));

// 分析:
function reverseArray(arr) {

    // 遍历数组
    for (var max = arr.length - 1, min = 0; max > min; min++, max--) {

        // 创建临时变量
        // 让数组首位交换
        // 每次交换完成后自增/自减
        var temp = arr[min];
        arr[min] = arr[max];
        arr[max] = temp;
    }

    // 返回反转之后的数组
    return arr;

}