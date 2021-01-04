## js解答题

1. 算数运算符都有哪些？

   +、-、*、/、%、+=、-=、乘等、/=、%=

2. NaN和任何值比较的结果都是什么？包括和自身比较吗？

   NaN和任何值比较都是false,包括和滋生比较

3. == 和 === 的区别在哪？

   ==：比较的是值,不考虑数据类型

   ===：比较的是值和数据类型


4. 逻辑运算符有哪些, 逻辑运算的规则有哪些

   逻辑运算符有&&、||、！

   &&：在比较时如果两端的值都是true返回true，如果两端的值任意一个为false返回false

   ||：在比较时如果两端的值任意一个为true则返回true


## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？

   ```js
   Array ，因为typeof主要用于判断简单数据类型
   ```

2. 判断下面结果的布尔值

   ```js
    333 == '333'//true
    666 == [666]//true
    '999' == [999]//true
    NaN == NaN //false
    NaN === NaN //false
    undefined == null//false
    undefined === null //false
    [] == []//false
    [] === []//false
    [] == 0//true
    ![] == 0//true
    [] == ![]//true
   ```

3. 打印输出下面的结果

   ```js
    1) true && !true//false
    2) false || !false//true
    3) false || !true && !false//false
    4) true && !false || false//true
    5) undefined && true//undefined
    6) 2+2 > 5 || 3-3 <=0 && !undefined//true
   ```

4. 打印输出下面的结果

   ```js
    var a = 10;
    var b = a++;
    console.log(b>=a);//false
    var c = b + 'a';
    console.log(c);//10a
    console.log(c == ('a' + b))//false
   ```
