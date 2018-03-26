---
layout: pages
title: 'dpkg:处理 xxx (--configure)时出错解决办法（转载)'
date: 2018-02-03 19:30:49
tags: Linux
description: Linux依赖关系处理
categories:
 - 猿笔记
 - 操作系统
---

原地址已经不在了，这是二次转载</br>
http://blog.csdn.net/sftxlin/article/details/8680815

---
## 问题
deepin上两次遇到下面这个问题，网上找到有效解决方法，拿小本本记下来

dpkg: 处理软件包 nginx-full (--configure)时出错：</br>
 子进程 已安装 post-installation 脚本 返回错误状态 1</br>
正在处理用于 man-db (2.7.6.1-2) 的触发器 ...</br>
正在设置 docker (1.5-1+b1) ...</br>
dpkg: 依赖关系问题使得 nginx 的配置工作不能继续：</br>
 nginx 依赖于 nginx-full (<< 1.13.3-1.1~) | nginx-light (<< 1.13.3-1.1~) | nginx-extras (<< 1.13.3-1.1~)；然而：</br>
  软件包 nginx-full 尚未配置。</br>
  未安装软件包 nginx-light。</br>
  未安装软件包 nginx-extras。</br>
 nginx 依赖于 nginx-full (>= 1.13.3-1) | nginx-light (>= 1.13.3-1) | nginx-extras (>= 1.13.3-1)；然而：</br>
  软件包 nginx-full 尚未配置。</br>
  未安装软件包 nginx-light。</br>
  未安装软件包 nginx-extras。</br>

dpkg: 处理软件包 nginx (--configure)时出错：</br>
 依赖关系问题 - 仍未被配置</br>
在处理时有错误发生：</br>
 nginx-full</br>
 nginx</br>
E: Sub-process /usr/bin/dpkg returned an error code (1)</br>

---

## 解决
```
1.$ sudo mv /var/lib/dpkg/info /var/lib/dpkg/info_old //现将info文件夹更名
2.$ sudo mkdir /var/lib/dpkg/info //再新建一个新的info文件夹
3.$ sudo apt-get update, apt-get -f install
4.$ sudo mv /var/lib/dpkg/info/* /var/lib/dpkg/info_old //执行完上一步操作后会在新的info文件夹下生成一些文件，现将这些文件全部移到info_old文件夹下
5.$ sudo rm -rf /var/lib/dpkg/info //把自己新建的info文件夹删掉
6.$ sudo mv /var/lib/dpkg/info_old /var/lib/dpkg/info //把以前的info文件夹重新改回名字

```
