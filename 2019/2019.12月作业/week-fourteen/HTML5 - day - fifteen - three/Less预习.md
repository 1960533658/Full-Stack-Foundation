# 移动Web

## css扩展语言 

### 为什么学习css扩展语言 

- 众所周知css并不能算是一门真正意义的编程语言,他本身无法完成真正意义上的编程语言一样的嵌套、继承、设置变量等工作,为了解决css的不足,开发者想到编写一种对css进行预处理的“中间语言”可以实现一些“编程”语言才有的功能，然后自动编译成css供浏览器识别，这样及一定程度上弥补了css的不足，也无需一种新的语言来代替css以供浏览器识别，于是Less预处理语言应运而生了。

### less的编译

- s - 1.vscode 实时编译插件 Less

- 2.下载之后创建less文件，自动创建css文件

### 注释

- 静默注释：不会被编译到css中 静默注释是给开发者看的

- 注释 /**/ 多行注释 css中的注释 会被编译到css文件中

### 变量

- 语法：@变量名: 变量值; ` 提示：变量名同样推荐使用小驼峰命名法 `

- 作用：方便设计修改设计帆帆 让前端修改页面的配色方案

```less

@width: 100px;
@height: 100px;
@blockCenter:0 auto;

```

### 嵌套

- 作用：减少代码 增加代码的层次关系 更快地后期维护

```less

div {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    border: 1px solid #e0e0e0;

    a {
        float: left;
        width: 34px;
        height: 22px;
        text-align: center;

        i {
            line-height: 22px;
            font-size: 16px;
            color: #b0b2ba;
        }
    }
}

```

### 群组选择器

```less

// .container h1, .container h2, .container h3 { margin-bottom: 0.8em}

.container {
    h1,h2,h3{
        margin-bottom: 20px;
    }
}

```

### 子组合选择器和同层选择器：>、+、~；

- ` > ` 代表 所有的自带选择器

- ` + ` 代表 某个元素（除了自己）后面的第一个兄弟元素

- ` ~ ` 代表 某个元素（除了自己）后面的所有的兄弟元素

### 在less中导入less文件

- 和Sass不一样不管有没有下划线都会被编译

- 语法： @import "less文件名"

### 混合器

- 和sass有些不同，不需要关键字,直接使用 “.”+“混合器名”的方式实现

- 语法：.混合器名 (形参：默认值/形参1，.形参2...) {功能代码}

- 调用：选择器 {.混合器()}

- 注意：如果调用混合器不想使用小括号的话，形参就必须有默认值，否则会报错
    


    