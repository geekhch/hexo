---
title: openwrt极路由交叉编译踩坑记
date: 2018-01-26 23:12:44
tags: openwrt
categories: 猿笔记
---
### 简介
  本次尝试对极路由4增强版进行openwrt交叉编译，从而实现在路由器上搭建mqtt的broker。本文主要学习如何编译合适的软件包。一般来说openwrt直接通过opkg软件源安装，但学会交叉编译可以利用源代码编译路由器软件

### 操作环境

+ 电脑系统：Linux
+ 路由器：极路由4增强版，官方固件（已进入开发者模式）
+ openwrt编译系统：LEDE

### openwrt编译过程学习
  参考宾神博客[openwrt交叉编译教程](http://les1ie.com/2017/04/07/MT-7688%E7%B3%BB%E7%BB%9F%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B/),这里就不多做描述了。

### 如何进行编译配置
  环境搭建好以后，在对应文件夹下输入命令`make menuconfig`,打开编译配置程序，![配置界面](https://raw.githubusercontent.com/geekhch/hexo/master/images/openwrt/%E5%9B%BA%E4%BB%B6%E9%80%89%E6%8B%A9.png?raw=true)
  #### 以下内容为个人猜测
  + 固件类型(Target Sytem)：openwrt是一个强大的开源系统，许多人共同维护，提交了许多不同的分支，从而有了不同的固件类型。
  + 处理器型号(SubTarget)：不同的固件类型支持的硬件也不同，稍后我会介绍如何快速找到适合自己路由器系统的方式。
  + 路由器型号（Target Profile)。

### 快速找到路由器对应版本
  首先确定自己路由器已经安装的固件信息。ssh登录路由器，针对我使用的路由器，`ssh -p 1022 root@192.168.199.1`。按提示登录后，输入`cat /proc/cpuinfo`,查看固件和硬件信息。![cpuinfo](https://raw.githubusercontent.com/geekhch/hexo/master/images/openwrt/cpuinfo.png?raw=true)
  现在你再回到上一张图片，自习观察我圈出的信息，发现了什么？

### 编译类型
看配置窗口上面提示，解释下
+ built-in: 编译进.bin二进制文件
+ exclude：不编译
+ module：编译成ipk软件包

### 使用ssh将软件包发送到路由器内
```
scp -P 1022 '/home/hch/Downloads/libmosquitto-nossl_1.4.14-1_mips_24kc.ipk' root@192.168.199.1:/tmp
```

### 安装
```
opkg install softname
```
### 安装失败以及懒人解决办法

提示invalid architecture，应该是极路由官方固件与我们选择的固件不是一个内核导致软件不兼容。最终还是在lede下了编译好的固件。发现该固件没有管理页面。

`opkg install luci`

重启路由器，OK了，有openwrt源什么都好办了，接下来安装了mosquitto,搭好了mqtt的broker。
