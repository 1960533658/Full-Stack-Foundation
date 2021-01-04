/*
    16.写一个函数，假设你正在爬楼梯。需要 n 阶你才能到达楼顶，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
*/

console.log('有'+pashan(20)+'种方法爬山')


function pashan(n) {

    if (n <= 0)
        return 0;
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;
    //初始化
    var x = 1;
    var y = 2;
    var result = 0;
    while (n >= 3) {
        result = x + y;
        x = y;
        y = result;
        n--;
    }
    return result;
}