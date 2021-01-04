## js解答题
1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？
    使用isNan方法，true不是一个数字，false代表不是一个数字

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？
    "100100"，因为当+后面时字符串时会出现批结字符串效果，，即不会出现数学运算

3. 请说说 `+` 号有几层含义，分别是什么？
    ①：数学运算
    ②：拼接字符串

4. 前--和后--的区别是什么？
    前--先自减1后运算
    后--运算后自减一

## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
    var num = 0.01
    if(parseInt(num)==num) {
        console.log('这个数字是数字')
    }else {
        console.log("这个数字不是数字")
    }
   ```

2. 探究题：详见下面代码

   ```js
    isNaN('') // false，引号是符号拥有特殊意义，所以他不是非数字
    isNaN('1A') // true 字符串是非数字
    isNaN(true) // false true是布尔值，隐式转换为数字类型，所以他不是一个非数字
    isNaN({}) // true // 对象是一个非数字，所以为true
    isNaN([1,1]) // true 数组是一个非数字，所以为true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
   ```

3. 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);//"1212"
    console.log(num1 + +num3);//"12"
    console.log(num1 + +num4);//undefined
    console.log(+num2 + !!num3);//12
    console.log(!!num2 + !!num4);//1
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a, //b = 12 a = 11
         c = a--, //c = 12 a = 10
         d = c++ + ++b + --a; //11+12+9
     console.log(a, b, c, d);//9 12 12 32
    
    2) var a = 100,
         b = --a, //a = 100 b = 99
         c = a-- + b++; //a = 99 b = 100 c = 199
         d = a - b-- + ++c; //a = 99 b = 100 c = 199 d = 197
     console.log(a, b, c, d); //98 99 199 197
   ```
