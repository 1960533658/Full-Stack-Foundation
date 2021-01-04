// 分析:

// 调用函数
getSum();

// 创建一个无返回值的函数
function getSum() {

    // 创建一个变量来累加和
    var sum = 0;
    // 遍历100-200
    for (var i = 100; i <= 200; i++) {
        sum = sum + i;
    }
    // 输出和

    console.log(sum);
}