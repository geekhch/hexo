---
layout: pages
title: markdown语法笔记
date: 2017-12-22 19:57:30
tags: markdown
description: Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。事实上Markdow完全兼容HTML的语法，但使用Markdown排版非常简单。公认说法：让笔客可以专注于文字，不用花太多精力来排版。以下将其简称为md，本文使用Atom for Win编辑器实现。
---

>记录了一般博客常用的功能所需语法

---

### Markdown简介

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。事实上Markdow完全兼容HTML的语法，但使用Markdown排版非常简单。公认说法：让笔客可以专注于文字，不用花太多精力来排版。以下将其简称为md，本文使用Atom for Win编辑器实现。

---

### 代码篇

1. 如果你只想高亮语句中的某个函数名或关键字：
 + 输入：\`function_name()\`  (反单引号,英文状态下，esc下面那个键)
 + 显示：`function_name()`
1. 插入代码块：
 + 输入：
  ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/code_block.png?raw=true)
  上面的c++可替换其他编程语言简写，md支持多种编程语法高亮

 + 显示效果
  ```c++
  int akm(int m, int n)
  {
  if(m == 0)
      return (n+1);
  else if(n == 0)
      return akm(m-1, n);
  else
      return akm(m-1, akm(m, n-1));
  }
  ```

---

### 标题篇

md可轻松实现标题分级
 + 输入：
  ```
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ```
 + 显示：
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题

---

### 引用篇

1. 一级引用
 + 输入：<br>
  \> 引用文本内容
 + 显示：
 >引用文本内容
2. 多级引用
 + 输入：<br>
  ```
  >11111
  >>22222
  >>>33333
  >>>>44444
  >>>>>55555
  ```
 + 显示：
  >11111
  >>22222
  >>>33333
  >>>>44444
  >>>>>55555

---

---

### 着重格式
+ 输入
  ```
  1. *你好，world*
  2. _你好，world_
  3. **你好，world**
  4. __你好，world__
  ```
+ 显示
  1. *你好，world*
  2. _你好，world_
  3. **你好，world**
  4. __你好，world__


### 分割线

可以使用连续三个或三个以上的*或-或_实现分割线，例如

 + 输入：<br>
  \***

 + 显示：


  ***

---

### 图片插入

>放一张高中暑假在青海拍的美景
 + `![我是图片](图片链接)，例如：`<br>
   `![茶卡盐湖](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/4.jpg?raw=true)`
   显示效果为

+ ![茶卡盐湖](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/4.jpg?raw=true)

---

### 链接跳转

1. 隐式链接跳转与图片相似，只需要去掉前面的感叹号。
 + 输入：`[3CAT'S Blog](http://www.3cat.top/myblog/)`
 + 效果：[3CAT'S Blog](http://www.3cat.top/myblog/)

---

### 插入视频

因md兼容HTML，可以直接将视频网站的视频分享代码贴到文档中
例如输入：
```
<embed src='http://player.youku.com/player.php/sid/XMzE0ODM1ODg1Ng==/v.swf'
allowFullScreen='true' quality='high' width="100%" height='385' align='middle'
allowScriptAccess='always' type='application/x-shockwave-flash'>
```
效果：
<embed src='http://player.youku.com/player.php/sid/XMzE0ODM1ODg1Ng==/v.swf'
allowFullScreen='true' quality='high' width="100%" height='385' align='middle'
allowScriptAccess='always' type='application/x-shockwave-flash'>
