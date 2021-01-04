/*
17.给定一个整数，写一个函数来判断它是否是 3 的幂次方
*/
// console.log(isPowerOfThree(15));

// var isPowerOfThree = function (n) {
//     return /^10*$/.test(n.toString(3));
// };

// function isPowerOfThree(n) {

//     if (n == 0) {
//         return false;
//     }
//     while (n % 3 == 0) {
//         n = n / 3;
//     }
//     return n == true;
// }

var n = 27;

var flag = true;

// while(n % 3 == 0) {

//     n = n / 3;
//     if(n != 0) {

//         continue;
//     }
// }

// if (n == 0) {
//     flag = false;
// }
while (n % 3 == 0) {
    n = n / 3;
}

if(n == 1) {

    flag = true;
}else {
    flag = false;
}

console.log(flag);