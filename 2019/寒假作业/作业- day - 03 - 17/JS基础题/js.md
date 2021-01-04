## js解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？

   ```js
   var obj = {}
   ```

   对象由行为和属性组成


2. 如何使用new关键字创建对象?

   ```js
   var obj = new Object()
   ```


3. 说明对象的基本操作（读取，修改，添加，删除）

   读取: 对象名.属性名或方法名

   修改：对象名.属性名或方法名 = 新value

   添加：对象名.新属性名或新方法名 = value

   删除：delete 对象名.属性名或方法名


4. 创建对象有几种方式，分别是什么？写语法

   ①：字面量创建对象

   ```js
   var obj = {}
   ```

   ②：new关键字创建对象

   ```js
   var obj = new Object()
   ```

   ③：工厂模式创建对象

   ```js
   function CreatPerson(name, age) {
       var Person = new Object();
       Person.name = name;
       Person.age = age;
       return Person;
   };
   var ming = CreatPerson("小明", 18);
   var hong = CreatPerson("小红", 16);
   console.log(ming, hong);
   ```

   ④：构造函数创建对象

   ```js
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   var ming = new Person("小明", 18);
   var hong = new Person("小红", 16);
   console.log(ming, hong)
   ```




## js编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var obj = {
       name = "可乐"；
       age = 18;
       sex = "你猜"；
       Rush = function （） {
       	alert("Rush B")
   	}
   }
   ```

2. 使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

    ```js
    var obj = new Object()
    obj.name = "雪碧"；
    obj.age = 19;
    obj.sex = "未知"；
    obj.like = function （） {
        alert("Rush B")
    }
    ```

3. 根据步骤操作对象

    ```js
    1) 定义一个对象：【姓名:柠檬 年龄:17】
    var obj = {
        name = "柠檬"；
        age = 17
    }
    2) 输出该对象的姓名
    alert（obj.name）；
    3) 修改该对象年龄为：未成年
    obj.age = "未成年"；
    4) 添加对象属性：性别为女，爱好为画画，职业为学生
    obj.sex = "女"；
    obj.like = function () {
    	alert("画画")；
    }
    obj.job = "学生"
    5) 输出该对象
    console.log(obj)
    6) 删除该对象的姓名
    delete obj.name
    7) 输出该对象
    console.log(obj)
    ```

4. 使用三种方式给对象var obj = {name:"杨"}添加属性age为30

    ```js
    var obj = {
        name:"杨"
    }
    //obj.age = 30; 
    //obj['age'] = 30;
    var age = "age";
    obj[age] = 30;
    console.log(obj)
    `参考答案：
    1) obj.age = 30; 
    2) obj['age'] = 30; 
    3) var age = "age"; obj[age] = 30;`
    ```