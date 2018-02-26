---
title: JS、Django、MySQL杂记
date: 2018-02-24 17:34:30
tags:
- MySQL
- Django
- JavaScript
description: 初学时容易犯的小错和难点
---

---
### MySQL中文数据类型选择
+ 输入较长中文时选择数据类型`text`
+ 使用语句` alter table words_love CHARACTER SET utf8;`修改数据库编码
---

### JS字符串问题
+ 单双引号的规则是个坑，可能导致函数调用出错，例如：
``` js
/*
*修改button触发事件参数，从而改变不同HTML元素
*/
<body>
    <h2 id="head2">我是HTML标题元素</h2>
    //调用函数的字符串参数'head2'应该用单引号而不是双引号，规则与Python相似
    <p><button type="button" onclick="function1('head2')">时间</button></p>
    <h3 id="hello"></h3>
    <script>
    function function1(pd){
        document.getElementById(pd).innerHTML=Date();
    }
    </script>
</body>
```
---
### JS闭包实现计数原理
+ `var add = (function()...)`自调用函数实际上只执行了一次
+ 第一次执行后，变量add为字符串 `"function () {return counter += 1;}"`
+ 在`myFunction()`中调用了add() :_add后面有括号表示调用函数而不是输出函数内容_
```js
<button type="button" onclick="myFunction()">计数!</button>
<p id="demo">0</p>
<script>
var add = (function () {
    var counter = 0; //第一次执行被初始化为0
    return function () {return counter += 1;}
})();
function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>
```
