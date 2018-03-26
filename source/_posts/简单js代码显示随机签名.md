---
title: Web页面显示随机签名
date: 2018-02-26 13:27:08
tags:
- JavaScript
description: 使用简单的JS代码实现web页面显示随机签名语句，看见上面那句个性十足的签名了吗？每次刷新都会随机改变。超喜欢这个小功能，以后喜欢的话都可以记这了。
categories: 猿笔记
---

>介绍插入js代码的两种情况

## 常规web页面
普通web页面只需要修改对应的HTML文档
+ 对应的HTML和JavaScript代码 _(注意被替换元素的id)_：
```HTML
<div class="site-name">
    <h1 class="hidden">加菲猫</h1>
    <a id="logo" href="/.">加菲猫</a>
    <!-- 下面id="subt"的h2标签就是被内联显示的元素，id与前面JavaScript代码要一致-->
    <h2 id="subt" >海纳百川</h2>
    <script>
        //声明一个数组，内容为你想显示的话
        var words = [
            "愿你遇良人，予你欢喜城",
            "你是我千种诗意万种想象",
            "想做一个很酷的人扭头就走 比你酷比你狠",
            "对不起，也许我将要打扰你，打扰你一生，而不是一下",
            "balabala......"
        ];

        //使用自调用方式声明函数，
        (function(){
            //创建0到words元素个数大小减一的随机数
            var rand = parseInt(Math.random() * words.length);
            /*
            *使用内联显示方式改变原签名，getElementById("subt")表示搜索*id="subt"的*HTML标签元素，
            */
            document.getElementById("subt").innerHTML = words[rand];
            console.log(words[rand]);//控制台调试信息，可以删掉
        };)()
    </script>
</div>
```
## hexo博客系统
 　　其他blog系统自行参考，hexo每次generate都会删掉原来的HTML文档，由所使用主题内的jade代码重新解释生成，直接修改待发布的HTML文档不是长久之计，因此得先找到解释出签名标签的源代码。我使用某大神的BlueLake主题（_表示感谢_），解释出签名标签的代码为`/home/hch/hexo/themes/BlueLake/layout/base.jade`里面的
 ```js
 p.description= config.subtitle //这里的config.subtitle为全局文本“海纳百川”
 ```

 它对应的HTML代码：
 ```html
 <p class="description">海纳百川</p>
 ```

 修改为：
 ```js
 h2(id= "subt").description= config.subtitle //标签由p改为h2,添加id属性
 script(type='text/javascript', src=url_for(theme.js) + '/word.js',async)//此处src链接到写好的JavaScript代码
 ```

这样解释出的HTML代码就变为
 ```HTML
 <h2 id="subt" class="description">海纳百川</h2>
 <script type="text/javascript" src="/js/word.js" async></script>
 ```

 ## 顺手记个js闭包实现计数原理

+ `var add = (function()...)`自调用函数实际上只执行了一次
+ 第一次执行后，变量add为字符串 `"function () {return counter += 1;}"`
+ 在`myFunction()`中调用了add() （_add后面有括号表示调用函数而不是输出函数内容_）：
```js
var add = (function () {
    var counter = 0; //第一次执行被初始化为0
    return function () {return counter += 1;}
})();
function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
```


## 番外
　　为了这一个小功能，刚看了几天Python后懵懂无知的我去学了Django和MySQL，还初步实现了数据库模型。正当我风风火火的开始学JavaScript打算用来在服务器与web页面传输数据时，让我悔恨终生的事就这么愉快地发生了...emmmm...
