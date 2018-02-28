---
title: gcc编译动态链接库
date: 2018-02-28 21:09:47
tags: Linux
---

## 未正确链接动态库（.so文件）导致编译失败，提示未定义的引用
```bash
/tmp/cc71gMCR.o：在函数‘main’中：
arcsoft_afd_samplecode.cpp:(.text+0x56d)：对‘AFD_FSDK_UninitialFaceEngine’未定义的引用
arcsoft_afd_samplecode.cpp:(.text+0x635)：对‘AFD_FSDK_UninitialFaceEngine’未定义的引用
collect2: error: ld returned 1 exit status
```

## 解决方法：
1. 编译时指定动态库
```bash
g++ test.cpp -L [动态库目录] -l[xxx] -o a.out #此处xxx是动态库文件名，去掉前缀lib和后缀.so
```
用这种方式编译后，运行目标程序可能<font color="red">找不到动态库而无法运行</font>

2. [<font color="green">_推荐_</font>] 将so文件丢到系统默认库目录，查看`/etc/ld.so.conf`,将库文件丢进去后，`sudo /sbin/ldconfig`重新加载配置。
