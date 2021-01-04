## js简答题

1. js中的单行和多行注释如何表示?
答：单行注释为“//”，多行注释为“/* */”
2. 什么是变量,声明变量有哪几种方式？
答：值可变的量就是变量。有var、let等
3. 变量名命名可以包含什么？其中不能以什么开头？
答：可以包含数字、字母、下划线等。不能以数字开头。
4. 变量名命名为什么区分大小写？不能拿什么用来命名？
答：因为就要区分大小写。不能用“ ”（空格符）命名。



## js编程题

1. 根据题意注释下面的内容

   ```js
//   ( 使用单行注释注释小括号的内容 )
/*【使用
   多行注释
   注释大括号的
   内容】*/
   ···不要注释我···
   ```

2. 使用一个var同时定义：变量名为age变量值为18；变量名为name变量值无；变量名为num变量值为NaN

   ```js
   var age = 18
   var name 
   var num = "a" - 1
   var num = NaN
   ```

3. 作为一名程序员，请指出下面错误的变量命名方式，并说明原因

   ```js
    var ABC = "A123"; 
    var name1 = "杨"; 
    var _age$ = 3; //只能以字母、下划线、$开头
    var 6Bu = 6; //只能以字母、下划线、$开头
    var this = "that"; //
    var is_Na& = "NO" //'&'字符不能这样用。
    var 呵呵 = 233 //不推荐使用汉字，可能会报错
   ```

4. 指出下面代码的错误及原因，并给出你认为正确的修正

   ```js
   var num, age, name;
   const num1;
   const name = "杨";
   const age1 = 3;
   age = age1 = 18;
   console.log(age);
   ```
   ```(改)
//    var num, age, name;
//    const num1 = 10;
//    const name = "杨"; //定义常亮名不能和变量名一致
//    const age1 = 3;
//    age = age1 = 18; //常量内容不能修改
//    console.log(age); 

   var num,age,name;
   const name1=10;
   const age1=10;
   const num1=10;
   age = 10;
   console.log(age);
   ```