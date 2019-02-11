---
layout: pages
title: 如何在idea集成环境配置javaweb项目
date: 2018-04-12 17:04:46
tags: Web开发
categories: 猿笔记
description: idea集成环境javaweb项目配置步骤
---
## 概要
要顺利使用idea进行javaweb开发，需要进入File->Project Structure进行如下配置:Project、modules、facets, libraries, artifacts, SDKs，以及Tomcat配置。本教程以辛老师的todoDemo项目配置为例。

---

## 创建新项目

为了去掉原有eclipse脚本等无关文件，使用IDEA Utimate新建web项目
 ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea1.png?raw=true)
然后将辛老师项目下的src、WebRoot文件夹下面的文件分别复制到新建项目对应文件夹下（WEBROOT/ -> web/）
目录树如下：
 ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_tree.png?raw=true)

---
## 配置project
选择正确的sdk(如JDK1.8),Project language level选择８

---
## 配置Modules
Modules主要指后端功能实现的java代码，该配置是告诉idea那些文件需要被编译，以及编译后的class文件保存到哪个位置。Modules生成的配置文件就是项目文件夹下的iml文件（idea xml的组合）

---
1. **配置Modules源**
配置好后如下图，只有src文件为蓝色(Source)
 ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea2.png?raw=true)
２. **配置编译输出目录**
Source文件应该被编译到WEB-INF下的classes文件夹下,进行如下配置
![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_output.png?raw=true)

---
## **配置tomcat**
  ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_cat1.png?raw=true)
![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_cat2.png?raw=true)
看到下面有个warning,　点fix->ok

---
## **配置facets**
facets的作用是将web.xml文件与web资源文件相互映射，如果你确定web.xml文件没写错而编译器爆红的话，就是这个配置有问题。
 ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_facets.png?raw=true)

---
## **配置artifacts**
 这是配置网站的资源发布，告诉idea哪些文件是作为webapp直接发布的,idea会把这些文件拷贝到out目录下面，然后浏览器访问的也是out目录下面的文件。
  ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_art.png?raw=true)
   ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_art1.png?raw=true)

带exploded是带扩展的应用，可以进行调试和热部署，支持修改后立即生效。配置好后运行项目，会有很多报错，如果是非法字符报错，是eclipse与idea的字符编码冲突造成的，点右下角utf-8,把当前文件convert成其他编码再convert回来就好了，但是有多个文件，所以要convert多次.....淡定，小事

---
## **配置libraries**
HttpServlet这些类名报错，说明缺少相应的依赖库，servlet依赖库在tomcat安装目录lib文件夹下
 ![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_lib.png?raw=true)
 还有json，jdbc什么的，辛老师项目WEB-INF/lib文件夹下面有这些包，按上面方式导入后，点运行按钮redeploy,应该就能打开网页了，打开网页后看不到菜单，是因为数据库有问题，检查是否导入了数据库，以及DAO用户设置。

---
## **结**
+ 一定要学会看log,如果网页打开错误，状态码为5开头，服务器日志一定会有异常记录，然后复制异常记录到搜索引擎或者问老师同学。 
![代码块](https://raw.githubusercontent.com/geekhch/hexo/master/images/markdown/idea_log.png?raw=true)
+ 最后推荐一组快捷键，`Ctrl+Shift+A`。
+ [idea快捷键手册](!http://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf)

暂时就这些，如果还有其他问题欢迎多多交流
